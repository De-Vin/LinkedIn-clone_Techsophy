import React from 'react'
import Profile from './Profile'
import '../../App.css'
import ProfileWidget from './ProfileWidget'

function WholeProfile() {
  return (
    <div className='app_body'>
        <Profile />
        <ProfileWidget />
    </div>
  )
}

export default WholeProfile