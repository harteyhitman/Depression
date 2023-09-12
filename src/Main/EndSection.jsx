import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const EndSection = () => {
  return (
    <div>
    <div className='navbar-container'>
    <h1>Depression Test</h1>
    </div>
    <div className="congrats-sandra">
   <p>Congratulations bagwell! your test shows you
   are not depressed. It is adviced you do more 
   activities that makes you happy if you feel a little 
   down.</p>
    </div>
    <div className="end-section">
   <Link to='/'> <button className='end-section-btn'>End session</button></Link>
    </div>
    </div>
  )
}

export default EndSection