import React from "react";
import SeekHelpImg from "../Assets/profile-circle.png";
import DropDownIMg from "../Assets/arrow-down.png";
import MentalImg from '../Assets/mental-img.png'
import Dropdown from '../components/Dropdown';

const SeekHelp = ({handleSubmit}) => {
  return (
    <div id="seek-help-profile">
      <div className="navbar-container seek-navbar">
        <h1>Welcome Sandra</h1>
        <div className="Profile-and-dropwdown">
          <img src={SeekHelpImg} alt="" />
        </div>
      </div>
      <Dropdown/>
      <img className="mental-health" src={MentalImg} alt="" />
      <div className="deperssion-text">
      Depression can affect anyone, 
      but recovery is possible with 
      proper care and support!    <br /> <br />
      Kindly enter your name and email below to take the text
      </div>
      <div className='click-here-btn seek-btn'>
      <button type='submit'>
      {handleSubmit}
      Click here to take test
      
      </button>  </div>  </div>
  );
};

export default SeekHelp;
