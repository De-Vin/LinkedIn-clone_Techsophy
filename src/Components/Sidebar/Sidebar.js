import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';


function Sidebar() {

    const user = useSelector(state => state.user.user);


    const recentItem = (topic)=>{
       return <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    }
    const groupItem = (topic)=>{
        return <div className='sidebar_recentItem'>
             <span className='sidebar_hash'>👥</span>
             <p>{topic}</p>
         </div>
     }

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://images8.alphacoders.com/115/thumb-1920-1156488.png' alt='' />
                <Avatar src={user.photoUrl} className='sidebar_avatar' >{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Profile Viewers</p>
                    <p className='sidebar_statnumber'>254</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Connections</p>
                    <p className='sidebar_statnumber'>784</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('Worldwide Flutter -WWF')}
                {recentItem('inidanstudents')}
                {recentItem('India')}
                {recentItem('Workshop')}
                <p className='sidebar_Groups'>Groups</p>
                {groupItem('Javascript')}
                {groupItem('React')}
                {groupItem('Worldwide Devs')}
                <p className='sidebar_Groups'>Events</p>
                <p className='sidebar_Groups'>Followed Hashtags</p>
                {recentItem('Javascript')}
                {recentItem('React')}

            </div>
        </div>
    )
}

export default Sidebar