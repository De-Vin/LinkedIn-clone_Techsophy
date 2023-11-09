import React, { useState } from 'react'
import './Profile.css'
import '../../App.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Aboutpopup from './Aboutpopup';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { selectExperience } from '../../features/experienceSlice';
import { useDispatch } from 'react-redux';
import { remove, addNew, edit } from '../../features/experienceSlice';
import ExperiencePopup from './ExperiencePopup';

import { selectEducation } from '../../features/educationSlice';
import { addeducation, editeducation, removeeducation } from '../../features/educationSlice';
import EducationPopup from './EducationPopup';

function Profile() {
    const dispatch = useDispatch();

    const [popUp, setPopUp] = useState(false);
    const [about, setabout] = useState(`Skilled front-end developer experience in building single-page applications (SPAs) with HTML5, CSS3, JavaScript, React.js, jQuery, and AJAX. Proficient in enhancing website layouts and structures with HTML5 and CSS3. Deep knowledge of JavaScript's built-in methods and closures. Experienced in designing websites with React.js, utilizing both class and functional components. Expertise in React Hooks, React-Router, and integrating React Axios and Redux for state management. A valuable asset for dynamic and innovative projects in front-end development.`)

    const [experiencePopup, setExperiencePopup] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [inputValues, setInputValues] = useState({
        Role: '',
        CompanyName: '',
        Duration: '',
        Location: '',
        Description: '',
    });


    function closePopup(abt) {
        if (abt !== about) {
            setabout(abt);
        }
        setPopUp(false)
    }

    const user = useSelector(state => state.user.user);

    const experience = useSelector(selectExperience);



    const openExperiencePopup = (index) => {
        if (index !== undefined) {
            // Editing an existing experience
            setEditIndex(index);
            setInputValues(experience[index]);
        } else {
            // Adding a new experience
            setEditIndex(null);
            setInputValues({
                Role: '',
                CompanyName: '',
                Duration: '',
                Location: '',
                Description: '',
            });
        }
        setExperiencePopup(true);
    };



    const handleExperiencePopupClose = () => {
        setExperiencePopup(false);
        setEditIndex(null);
        setInputValues({
            Role: '',
            CompanyName: '',
            Duration: '',
            Location: '',
            Description: '',
        });
    };

    const handleClick = () => {
        if (editIndex !== null) {
            // If editIndex is not null, it means we are editing an existing experience
            dispatch(edit({ index: editIndex, updatedObject: inputValues }));
        } else {
            // Otherwise, we are adding a new experience
            dispatch(addNew(inputValues));
        }
        handleExperiencePopupClose();
    };

    //Education
    const education = useSelector(selectEducation);

    const [educationPopup, setEducationPopup] = useState(false);
    const [educationeditIndex, setEducationEditIndex] = useState(null);
    const [educationinputValues, setEducationInputValues] = useState({
        College: '',
        Degree: '',
        Duration: '',
        Location: '',
    });


    const openEducationPopup = (index) => {
        if (index !== undefined) {
            // Editing an existing education
            setEducationEditIndex(index);
            setEducationInputValues(education[index]);
        } else {
            // Adding a new education
            setEducationEditIndex(null);
            setEducationInputValues({
                College: '',
                Degree: '',
                Duration: '',
                Location: '',
            });
        }
        setEducationPopup(true);
    };


    const handleEducationPopupClose = () => {
        setEducationPopup(false);
        setEducationEditIndex(null);
        setEducationInputValues({
            College: '',
            Degree: '',
            Duration: '',
            Location: '',
        });
    };

    const handleEducationClick = () => {
        if (educationeditIndex !== null) {
            // If editIndex is not null, it means we are editing an existing education
            dispatch(editeducation({ index: educationeditIndex, updatedObject: educationinputValues }));
        } else {
            // Otherwise, we are adding a new education
            dispatch(addeducation(educationinputValues));
        }
        handleEducationPopupClose();
    };



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
            <div className='profile_about'>
                <div className='about_header'>
                    <h2>About</h2>
                    <ModeEditIcon className='about_editIcon' onClick={() => { setPopUp(true) }} />
                    {popUp && (<Aboutpopup onClose={closePopup} about={about} />)}

                </div>
                <div className='about_content'>
                    <p>{about}</p>
                </div>
            </div>
            <div className='profile_experience'>
                <div className='experience_header'>
                    <h2>Experience</h2>
                    <AddIcon className='add_icon' onClick={() => openExperiencePopup()} />
                </div>
                <div className='experience_content'>
                    {
                        experience.map((each, index) => {
                            return (<div className='experience_card'>
                                <div className='experience_cardinner'>
                                    <div className='experience_items' key={index}>
                                        <h2>{each.Role}</h2>
                                        <span>{each.CompanyName}</span>
                                        <h4>{each.Duration}. Months</h4>
                                        <h4>{each.Location}</h4>

                                    </div>
                                    <div className='experience_icons'>
                                        <ModeEditIcon className='about_editIcon' onClick={() => openExperiencePopup(index)} />
                                        <DeleteIcon className='about_editIcon' onClick={() => { dispatch(remove(index)) }} />
                                    </div>
                                </div>
                                <div className='experience_cardouter'>
                                    <p>{each.Description}</p>
                                </div>
                            </div>)
                        })
                    }
                    {experiencePopup && (
                        <ExperiencePopup
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                            editIndex={editIndex}
                            handleClick={handleClick}
                            onClose={handleExperiencePopupClose}
                        />
                    )}
                </div>
            </div>
            <div className='profile_experience'>
                    <div className='experience_header'>
                        <h2>Education</h2>
                        <AddIcon className='add_icon' onClick={() => openEducationPopup()} />
                    </div>
                    <div className='experience_content'>
                        {education.map((each, index) => {
                            return (<div className='experience_card'>
                                <div className='experience_cardinner'>
                                    <div className='experience_items' key={index}>
                                        <h2>{each.College}</h2>
                                        <span>{each.Degree}</span>
                                        <h4>{each.Duration}</h4>
                                        <h4>{each.Location}</h4>

                                    </div>
                                    <div className='experience_icons'>
                                        <ModeEditIcon className='about_editIcon' onClick={() => openEducationPopup(index)} />
                                        <DeleteIcon className='about_editIcon' onClick={() => { dispatch(removeeducation(index)) }} />
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                        {educationPopup && (
                            <EducationPopup
                                educationinputValues={educationinputValues}
                                setEducationInputValues={setEducationInputValues}
                                educationeditIndex={educationeditIndex}
                                handleEducationClick={handleEducationClick}
                                onClose={handleEducationPopupClose}
                            />
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Profile