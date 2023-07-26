"use client"
import React, { useState } from 'react';
// import { auth } from '../articles/firebase/firebase';
// import {
//     signInWithEmailAndPassword
// } from "firebase/auth";
function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async() => {
    try {
        // const userData = await signInWithEmailAndPassword(auth, email, password);
            console.log(userData);
    } catch (error) {
        console.error("An error occured", error.message);
    }

  };

  return (
    <div className='my-3'>
      <h1 className='text-center'>Login</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <div className='form-outline mb-4'>
            <input
              type='email'
              id='form1Example1'
              className='form-control'
              value={email}
              onChange={handleEmailChange}
            />
            <label className='form-label' htmlFor='form1Example1'>
              Email address
            </label>
          </div>

          <div className='form-outline mb-4'>
            <input
              type='password'
              id='form1Example2'
              className='form-control'
              value={password}
              onChange={handlePasswordChange}
            />
            <label className='form-label' htmlFor='form1Example2'>
              Password
            </label>
          </div>
          <div className='row mb-4'>
            <button type='button' className='btn btn-primary btn-block' onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
