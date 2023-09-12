import React from 'react'
import { Link } from 'react-router-dom'

const ClickHereToTakeTest = ({handleSubmit}) => {
  return (
    <div className='click-here-btn'>
    <button type='submit'>
     <Link to="SignInPage">{handleSubmit}Click here to take test</Link>
    </button>
    </div>
  )
}

export default ClickHereToTakeTest