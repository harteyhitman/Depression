import React from "react";
import SeekHelpImg from "../Assets/profile-circle.png";
import DropDown from "../Assets/arrow-down.png";
import MentalImg from '../Assets/mental-img.png'
import ClickHereToTakeTest from '../components/ClickHereToTakeTest';

const SeekHelp = ({handleSubmit}) => {
  return (
    <div id="seek-help-profile">
      <div className="navbar-container">
        <h1>Welcome Sandra</h1>
        <div className="Profile-and-dropwdown">
          <img src={SeekHelpImg} alt="" />
          <img src={DropDown} alt="" />
        </div>
      </div>
      <img className="mental-health" src={MentalImg} alt="" />
      <div className="deperssion-text">
      Depression can affect anyone, 
      but recovery is possible with 
      proper care and support!    <br /> <br />
      Kindly enter your name and email below to take the text
      </div>
      <ClickHereToTakeTest handleSubmit={handleSubmit}/>
    </div>
  );
};

export default SeekHelp;
