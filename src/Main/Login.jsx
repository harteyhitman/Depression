import React from 'react'
import { useState } from 'react';
import ClickHereToTakeTest from '../components/ClickHereToTakeTest';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        console.log('Name:', name);
        console.log('Email:', email);
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='login'>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='login'>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <ClickHereToTakeTest handleSubmit={handleSubmit}/>
      </form>
  )
}

export default Login