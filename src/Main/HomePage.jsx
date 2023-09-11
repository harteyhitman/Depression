import React from 'react'
import Navbar from '../components/Navbar';
import MentalImg from '../Assets/mental-img.png'
import Login from './Login';


const HomePage = () => {
  return (
    <div>
    <Navbar />
    <img src={MentalImg} alt="" />
    <div className="deperssion-text">
    Depression can affect anyone, 
    but recovery is possible with 
    proper care and support!    <br /> <br />
    Kindly enter your name and email below to take the text

    </div>
    <Login />
    
    </div>
  )
}

export default HomePage