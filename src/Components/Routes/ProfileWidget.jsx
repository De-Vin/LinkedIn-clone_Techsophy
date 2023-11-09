import React from 'react'
import './ProfileWidget.css'
import { Avatar } from '@mui/material'

function ProfileWidget() {

    const peopleProfile = (name, description, button, src) => {
        return (<div className='peoplecard'>
            <div className='people_icon'>
                <Avatar src={src}>{name[0]}</Avatar>
            </div>
            <div className='people_content'>
                <h3>{name}</h3>
                <p>{description}</p>
                <button>{button}</button>
            </div>

        </div>)
    }

    return (
        <div className='profileWidget'>
            <div className='profileWidget_header'>
                <h2>People who viewed</h2>
            </div>
            {peopleProfile('Chakri Betha', 'Frontend Developer', 'Message', 'https://d1zxene68j3keg.cloudfront.net/sites/default/files/styles/max_325x325/public/Resouces/images/Men%2C%20Mental%20Health.jpg?itok=YMPAhjYf')}
            {peopleProfile('Charan', 'Data Science Engineer at Techsophy', 'Connect','https://images.squarespace-cdn.com/content/v1/567349261115e0e8174ec010/1485541023133-MYFMTMBPBA9DOQJ5EQHA/India-Varanasi%2C+Photo+by+Donatella+Venturi.jpg?format=750w')}
            {peopleProfile('Deekshitha', 'UI/UX Designer', 'Connect','https://www.goldmansachs.com/our-commitments/sustainability/one-million-black-women/impact-grants/multimedia/masthead.jpg')}
            {peopleProfile('Gayathri Mooga', 'Legal Advisor from Home', 'Follow','https://media.npr.org/assets/img/2023/01/16/sangita_ashok_devde_5_toned-4_custom-1170941a1554ca9054ddc8639758eb2694951e6e-s1100-c50.jpg')}
            {peopleProfile('Anjali', 'React Developer at Techsophy', 'Message','https://wallpapers.com/images/hd/beautiful-black-woman-with-the-sky-wrcmewxu2vjopsav.jpg')}
            {peopleProfile('Narsimha', 'Design Engineer at Regalrexnord', 'Connect','https://as2.ftcdn.net/v2/jpg/02/76/29/51/1000_F_276295161_PI5aD0ULjp6Z4dC0XgGtnOFEfOOa3fJJ.jpg')}
        </div>
    )
}

export default ProfileWidget