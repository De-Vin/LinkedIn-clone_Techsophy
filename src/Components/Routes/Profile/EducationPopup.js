import React from 'react';

function EducationPopup({ educationinputValues, setEducationInputValues, educationeditIndex, handleEducationClick, onClose }) {
  return (
    <div className='popup_overlay'>
      <div className='popup_content'>
        <h1>{educationeditIndex !== null ? 'Edit Education' : 'Add Education'}</h1>
        <input
          type='text'
          placeholder='College'
          value={educationinputValues.College}
          onChange={(e) => setEducationInputValues({ ...educationinputValues, College: e.target.value })}
        />
        <input
          type='text'
          placeholder='Degree'
          value={educationinputValues.Degree}
          onChange={(e) => setEducationInputValues({ ...educationinputValues, Degree: e.target.value })}
        />
        <input
          type='text'
          placeholder='Duration'
          value={educationinputValues.Duration}
          onChange={(e) => setEducationInputValues({ ...educationinputValues, Duration: e.target.value })}
        />
        <input
          type='text'
          placeholder='Location'
          value={educationinputValues.Location}
          onChange={(e) => setEducationInputValues({ ...educationinputValues, Location: e.target.value })}
        />
        <button onClick={handleEducationClick}>{educationeditIndex !== null ? 'Save' : 'Add'}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EducationPopup;
