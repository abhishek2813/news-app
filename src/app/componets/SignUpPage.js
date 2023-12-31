
import React, { useState } from 'react';
// import { auth } from '../../../firebase/firebase';
// import {
//     createUserWithEmailAndPassword
// } from "firebase/auth";
function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async() => {
 
    if (password !== confirmPassword) {
      alert('Password and Confirm Not Password match.');
      // Do something here if passwords match (e.g., submit form)
      return 
    }
    try {
        // const userData = await createUserWithEmailAndPassword(auth,
        //     email,
        //     password
        //     )
        //     console.log(userData);
    } catch (error) {
        console.error("An error occured", error.message);
    }

  };

  return (
    <div className='my-3'>
      <h1 className='text-center'>Sign Up</h1>
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

          <div className='form-outline mb-4'>
            <input
              type='password'
              id='form1Example3'
              className='form-control'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <label className='form-label' htmlFor='form1Example3'>
              Confirm Password
            </label>
          </div>

          <div className='row mb-4'>
            <button type='button' className='btn btn-primary btn-block' onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
