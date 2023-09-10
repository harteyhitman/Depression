import React from 'react'
import { Link } from 'react-router-dom'

const ClickHereToTakeTest = () => {
  return (
    <div className='click-here-btn'>
    <button>
     <Link to="SignInPage">Click here to take test</Link>
    
    </button>
    </div>
  )
}

export default ClickHereToTakeTest