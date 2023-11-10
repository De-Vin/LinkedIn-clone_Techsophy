import React,{useState} from 'react'
import './Profile.css'
import { useSelector } from 'react-redux';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { selectEducation } from '../../../features/educationSlice';
import { addeducation, editeducation, removeeducation } from '../../../features/educationSlice';
import EducationPopup from './EducationPopup';

function ProfileEducation() {

    const dispatch = useDispatch();

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
    )
}

export default ProfileEducation