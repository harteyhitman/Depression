import React from "react";
import Navbar from "../components/Navbar";
import CloseCircle from '../Assets/close-circle.png'
import { Link } from "react-router-dom";

const Submit = () => {
  const first = "I feel so choked up and exhaused";
  const second = "My life isn’t great but its okay";
  return (
    // <div>
    // {QuestionsData.map((question)=>(
    //     <div>{question.id} <span>{question.topics}</span></div>
    // ))}
    // </div>
    <div>
    <div className='navbar-container'>
    <h1>Depression Test</h1>
   <Link to="/SignInPage"><img src={CloseCircle} alt="" /></Link>
    </div>
    <div className="questions">
      <div className="topics submit">
        8. <span> How will you define your life at the moment?</span>
      </div>
      <div className="first quest">{first}</div>
      <div className="second quest">{second}</div>
      <div className="quest-btn-container">
      <Link to='/SignInPage'><button className="quest-btn">prev</button></Link>  
       <Link to='/SignInPage/Submit/EndSection'><button className="quest-btn">next</button></Link> 
      </div>    
      <Link to='/SignInPage/Submit/EndSection'><button className="submit-btn">Submit</button></Link>
    </div>
    </div>
  );
};
export default Submit;
