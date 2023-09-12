import React from 'react'
import QuestionsData from '../components/QuestionsData'
import { Link } from 'react-router-dom';

const Questionns = () => {
    const first = ("Not very often");
    const second = ("Very often lately")
  return (
    // <div>
    // {QuestionsData.map((question)=>(
    //     <div>{question.id} <span>{question.topics}</span></div>
    // ))}
    // </div>
    
    <div className='questions'>
    <div className='topics'>1. <span>  How often do you feel lonely?</span></div>
    <div className="first quest">{first}</div>
    <div className="second quest">{second}</div>
    <div className="quest-btn-container">
    <button className='quest-btn'>prev</button>
    <button className='quest-btn'><Link to="/SignInPage/Submit">next</Link> </button>
    </div>
    </div>
  )
}

export default Questionns