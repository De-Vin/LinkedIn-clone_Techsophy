import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widget/Widgets';
import React from 'react'

function Home() {
    return (
        <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>

    )
}

export default Home