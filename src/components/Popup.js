import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <h2>Theme Color</h2>
          
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            Close
          </button>
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

          {/* Cancel and Save buttons */}
          
        </div>
          <div className='button-container'>
            <button className='cancel-btn'>Cancel</button>
            <button className='save-btn' >Save</button>
          </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
