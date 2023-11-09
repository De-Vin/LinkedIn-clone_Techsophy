import React, { useEffect, useState } from 'react'
import './Feed.css'
// import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InputOption from '../../Utils/InputOption'
import { Avatar } from '@mui/material'
import Post from '../../Utils/Post';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc,serverTimestamp,orderBy, query } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'

function Feed() {

    const user = useSelector(state=>state.user.user)

    const [input, setInput] = useState('')
    const [posts, setposts] = useState([])

    useEffect(() => {
        const postsCollection = collection(db, 'posts'); // Use 'collection' to access the 'posts' collection
        const q = query(postsCollection, orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            setposts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            );
        });
    }, []);

    function sendPost(e) {
        e.preventDefault()
        const postsCollection = collection(db, 'posts');
        const postData = {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp : serverTimestamp(),
        };

        addDoc(postsCollection, postData)
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                setInput(''); // Clear the input field after posting
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_topLine'>
                    <Avatar className='feed_avatar' src={user.photoUrl} >{user.displayName[0]}</Avatar>
                    <div className='feed_input'>
                        <form>
                            {/* <CreateIcon /> */}
                            <input type='text' placeholder='Start a post' value={input} onChange={(e) => { setInput(e.target.value) }} />
                            <button type='submit' onClick={sendPost}>Send</button>
                        </form>
                    </div>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={ImageIcon} title='Media' color='#70B5F9' />
                    <InputOption Icon={WorkIcon} title='Job' color='e4c1f9' />
                    <InputOption Icon={NewspaperIcon} title='Write article' color='e09f3e' />
                </div>
            </div>
            <hr />
            <FlipMove>
            {
                posts &&
                posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                    return (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    );
                })
            }
            </FlipMove>
        </div>
    )
}

export default Feed