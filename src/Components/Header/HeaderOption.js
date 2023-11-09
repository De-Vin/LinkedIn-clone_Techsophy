import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

function HeaderOption({Icon , title, avatar, onClick}) {
  
  const user = useSelector(state=>state.user.user)

  
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon  className='headerOption_icon' />}
        {avatar && (<Avatar className='headerOption_icon' src={avatar} >{user?.displayName[0]}</Avatar>)}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;