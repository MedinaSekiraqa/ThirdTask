import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <h2>Popup Title</h2>
          
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            Close
          </button>
        </div>
        <div className='popup-content'>
          
          <div className='name-box'>
            <p>Font Color</p>
            <p2>#44455</p2>
            
            <button className='code-btn1'>Code</button>
          </div>
          <div className='name-box'>
            <p>Background Color</p>
            <p2>#FEEFF</p2>
            <button className='code-btn2'>Code</button>
            
          </div>
          <div className='name-box'>
            <p>Button Color</p>
            <p2>#FFFF</p2>
            <button className='code-btn'>Code</button>
          </div>
          <div className='name-box'>
            <p>Button Border Color</p>
            <p2>#FEEFF</p2>
            <button className='code-btn'>Code</button>
          </div>
          <div className='name-box'>
            <p>Button Mouseover Color</p>
            <p2>#FEEFF</p2>
            <button className='code-btn3'>Code</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
