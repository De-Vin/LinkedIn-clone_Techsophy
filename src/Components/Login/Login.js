import React, { useState } from 'react'
import './Login.css'
// import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth,updateProfile } from "firebase/auth"
import { firebaseApp } from '../../firebase'

function Login() {
    const auth = getAuth(firebaseApp);
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [Profile, setProfile] = useState('')
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert('Please enter Name');
        }
        createUserWithEmailAndPassword(auth, email, password) // Using createUserWithEmailAndPassword directly
                    .then((userAuth) => {
                        updateProfile(userAuth.user, {
                            displayName: name,
                            photoURL: Profile,
                        })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email, // Correct the property name to 'email'
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: Profile,
                        }));
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password)
        .then(userAuth=>{
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl : userAuth.user.photoURL,
            }))
        }).catch(error=>alert(error))
    }

    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png' alt='LinkedInlogo' />
            <form>
                <input placeholder='Full Name (required if new)' type='text' value={name} onChange={e => { setName(e.target.value) }} />
                <input placeholder='Profile Url (Optional)' type='text' value={Profile} onChange={e => { setProfile(e.target.value) }} />
                <input placeholder='Email' type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input placeholder='Password' type='password' value={password} onChange={e => { setpassword(e.target.value) }} />

                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{' '}
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>


    )
}

export default Login