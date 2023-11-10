import React,{ useState }from 'react'
import './Profile.css'
import Aboutpopup from './Aboutpopup';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function ProfileAbout() {

    const [popUp, setPopUp] = useState(false);
    const [about, setabout] = useState(`Skilled front-end developer experience in building single-page applications (SPAs) with HTML5, CSS3, JavaScript, React.js, jQuery, and AJAX. Proficient in enhancing website layouts and structures with HTML5 and CSS3. Deep knowledge of JavaScript's built-in methods and closures. Experienced in designing websites with React.js, utilizing both class and functional components. Expertise in React Hooks, React-Router, and integrating React Axios and Redux for state management. A valuable asset for dynamic and innovative projects in front-end development.`)

    function closePopup(abt) {
        if (abt !== about) {
            setabout(abt);
        }
        setPopUp(false)
    }



    return (
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
    )
}

export default ProfileAbout