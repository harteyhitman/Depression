import React, { useState } from 'react';
import DropDownIMg from "../Assets/arrow-down.png";


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : <img src={DropDownIMg} alt="" />}
      </button>
      {isOpen && (
        <ul className='drop-down-list'>
         <button className='btn-list'>Log out</button>
         <button className='btn-list'>Seek help</button>
          
        </ul>
      )}
    </div>
  );
      }
export default Dropdown