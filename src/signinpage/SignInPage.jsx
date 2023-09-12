import React from 'react'
import CloseCircle from '../Assets/close-circle.png'
import { Link } from 'react-router-dom'
import Questionns from '../Main/Questionns'

const Questions = () => {
  return (
    <div>
    <div className='navbar-container'>
    <h1>Depression Test</h1>
   <Link to="/"><img src={CloseCircle} alt="" /></Link>
    </div>
    <div className="questions-body">
     <Questionns />
    </div>
   
    </div>
  )
}

export default Questions