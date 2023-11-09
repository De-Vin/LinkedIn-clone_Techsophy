import React, { useState,useRef,useEffect } from 'react'
import './Aboutpopup.css'

function Aboutpopup({onClose,about}) {
  const [editabout, setEditAbout] = useState(about);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  function handleFormSubmit(e){
    e.preventDefault();
    onClose(editabout);
  }

  return (
    <div className='popup_overlay'>
        <div className='popup_content'>
                <p>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                <input type='text' value={editabout} placeholder='Enter text'  ref={inputRef} onChange={e=>setEditAbout(e.target.value)}/>
                <button onClick={handleFormSubmit}>Save</button>
        </div>
    </div>
  )
}

export default Aboutpopup