import React from 'react'
import './Post.css'
import { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl},ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoUrl || ''} >{name[0]}</Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_buttons'>
                 <InputOption Icon={ThumbUpIcon} title='Like' color='gray' />
                 <InputOption Icon={CommentIcon} title='Comment' color='gray' />
                 <InputOption Icon={DynamicFeedIcon} title='Repost' color='gray' />
                 <InputOption Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post