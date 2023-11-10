import React from 'react';
import './ExperiencePopup.css'

function ExperiencePopup({ inputValues, setInputValues, editIndex, handleClick, onClose }) {
  return (
    <div className='popup_overlay'>
      <div className='popup_content'>
        <h1>{editIndex !== null ? 'Edit Experience' : 'Add Experience'}</h1>
        <input
          type='text'
          placeholder='Role'
          value={inputValues.Role}
          onChange={(e) => setInputValues({ ...inputValues, Role: e.target.value })}
        />
        <input
          type='text'
          placeholder='Company Name'
          value={inputValues.CompanyName}
          onChange={(e) => setInputValues({ ...inputValues, CompanyName: e.target.value })}
        />
        <input
          type='text'
          placeholder='Duration'
          value={inputValues.Duration}
          onChange={(e) => setInputValues({ ...inputValues, Duration: e.target.value })}
        />
        <input
          type='text'
          placeholder='Location'
          value={inputValues.Location}
          onChange={(e) => setInputValues({ ...inputValues, Location: e.target.value })}
        />
        <input
          type='text'
          placeholder='Description'
          value={inputValues.Description}
          onChange={(e) => setInputValues({ ...inputValues, Description: e.target.value })}
        />
        <button onClick={handleClick}>{editIndex !== null ? 'Save' : 'Add'}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ExperiencePopup;
