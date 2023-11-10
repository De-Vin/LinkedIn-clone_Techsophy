import './Profile.css'
import '../../../App.css'
import React from 'react';
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';

function Profile() {

    const user = useSelector(state => state.user.user);
    
    return (

        <div className='profile'>
            <div className='profile_header'>
                <img src='https://images8.alphacoders.com/115/thumb-1920-1156488.png' alt='' />
                <Avatar src={user.photoUrl} className='profile_avatar' sx={{ fontSize: '40px' }}>{user.displayName[0]}</Avatar>
                <div className='profile_header_section'>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                    <p>Hydereabad, India  <span> Contact Info</span></p>
                    <span style={{ marginLeft: '30px' }}>500+ Conections</span>
                </div>
            </div>
            <ProfileAbout />
            <ProfileExperience />
            <ProfileEducation />
        </div>
    )
}

export default Profile