import React from 'react'
import { Link } from 'react-router-dom'

const ClickHereToTakeTest = ({handleSubmit}) => {
  return (
    <div className='click-here-btn'>
     <Link to="SignInPage"><button type='submit'>
    {handleSubmit}
    Click here to take test
    
    </button></Link>
    </div>
  )
}

export default ClickHereToTakeTest