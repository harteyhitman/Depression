import React from 'react'
import Navbar from '../components/Navbar';
import MentalImg from '../Assets/mental-img.png'
import ClickHereToTakeTest from './ClickHereToTakeTest';


const HomePage = () => {
  return (
    <div>
    <Navbar />
    <img src={MentalImg} alt="" />
    <div className="deperssion-text">
    Depression can affect anyone, 
    but recovery is possible with 
    proper care and support!
    </div>
    <ClickHereToTakeTest />
    </div>
  )
}

export default HomePage