import React, { useState } from 'react'
import './Profile.css'
import { remove, addNew, edit } from '../../../features/experienceSlice';
import ExperiencePopup from './ExperiencePopup';
import { selectExperience } from '../../../features/experienceSlice';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



function ProfileExperience() {

    const [experiencePopup, setExperiencePopup] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [inputValues, setInputValues] = useState({
        Role: '',
        CompanyName: '',
        Duration: '',
        Location: '',
        Description: '',
    });

    const experience = useSelector(selectExperience);
    const dispatch = useDispatch();

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


    return (
        <div className='profile_experience'>
            <div className='experience_header'>
                <h2>Experience</h2>
                <AddIcon className='add_icon' onClick={() => openExperiencePopup()} />
            </div>
            <div className='experience_content'>
                {
                    experience.map((each, index) => (
                        <div className='experience_card' key={JSON.stringify(each.Role + each.CompanyName) || index}>
                            <div className='experience_cardinner'>
                                <div className='experience_items'>
                                    <h2>{each.Role}</h2>
                                    <span>{each.CompanyName}</span>
                                    <h4>{each.Duration}. Months</h4>
                                    <h4>{each.Location}</h4>
                                </div>
                                <div className='experience_icons'>
                                    <ModeEditIcon className='about_editIcon' onClick={() => openExperiencePopup(index)} />
                                    <DeleteIcon className='about_editIcon' onClick={() => dispatch(remove(index))} />
                                </div>
                            </div>
                            <div className='experience_cardouter'>
                                <p>{each.Description}</p>
                            </div>
                        </div>
                    ))
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
    )
}

export default ProfileExperience