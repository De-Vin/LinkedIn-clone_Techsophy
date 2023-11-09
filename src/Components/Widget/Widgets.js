import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }


    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon  style={{fontSize:'medium'}} />
            </div>
            {newsArticle("Pharma deals take growth pill", "14h ago • 212 readers")}
            {newsArticle('Tech talent in demand beyond IT', '14h ago • 3,494 readers')}
            {newsArticle('Real estate finds new home', '14h ago • 827 readers')}
            {newsArticle('Top newsletters of the week','14h ago • 1,497 readers')}
            {newsArticle('India Inc to lead in pay hikes','14h ago • 159 readers')}
        </div>
    )
}

export default Widgets