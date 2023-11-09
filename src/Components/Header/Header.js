import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'


function Header() {
  const dispatch = useDispatch();


  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className='header_left'>
        <LinkedInIcon className='LinkedInIcon' />
        <div className='header_search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header_right'>

        <Link to='/' className='header_link' ><HeaderOption Icon={HomeIcon} title='Home' /></Link>
        <Link to='/mynetwork' className='header_link' ><HeaderOption Icon={SupervisorAccountIcon} title='My Network' /></Link>
        <Link to='/jobs' className='header_link' ><HeaderOption Icon={BusinessCenterIcon} title='Jobs' /></Link>
        <Link to='/messaging' className='header_link'><HeaderOption Icon={ChatIcon} title='Messaging' /></Link>
        <Link to='/notifications' className='header_link'><HeaderOption Icon={NotificationsIcon} title='Notifications' /></Link>
        <Link to='/profile' className='header_link' ><HeaderOption avatar={true} title='Me' /></Link>
        <HeaderOption Icon={LogoutIcon} title='Logout' onClick={logoutOfApp} />
      </div>

    </div>
  )
}

export default Header