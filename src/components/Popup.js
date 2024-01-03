import React from 'react';
import './Popup.css';

function Popup(props) {
  // Define a function to handle saving logic
  const handleSave = () => {
    // Add your save logic here
    // For example, you can console.log a message for demonstration purposes
    console.log('Saving changes...');
    // Close the popup after saving (you can adjust this based on your needs)
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <h2>Theme Color</h2>
        </div>
        <div className='popup-content'>
        <div className='name-box'>
            <p>Font Color</p>
            <div className='div'>
              <span>#44455</span>
              <button className='code-btn1'>Code</button>
            </div>
          </div>
          <div className='name-box'>
            <p>Background Color</p>
            <div className='div'>
              <span>#FEEFF</span>
              <button className='code-btn2'>Code</button>
            </div>
          </div>
          <div className='name-box'>
            <p>Button Color</p>
            <div className='div'>
              <span>#FFFF</span>
              <button className='code-btn'>Code</button>
            </div>
          </div>
          <div className='name-box'>
            <p>Button Border Color</p>
            <div className='div'>
              <span>#FEEFF</span>
              <button className='code-btn'>Code</button>
            </div>
          </div>
          <div className='name-box'>
            <p>Button Mouseover Color</p>
            <div className='div'>
              <span>#FEEFF</span>
              <button className='code-btn3'>Code</button>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button className='cancel-btn' onClick={() => props.setTrigger(false)}>Cancel</button>
          {/* Attach the handleSave function to the onClick event of the "Save" button */}
          <button className='save-btn' onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
