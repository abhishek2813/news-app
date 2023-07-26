'use client'
import React, { useState } from 'react'
import LoginPage from '@/app/componets/LoginPage'
import SignUpPage from '@/app/componets/SignUpPage'

function page() {
    const [showLoginPage, setShowLoginPage] = useState(true);

  const handleToggle = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (
    <div className='container'>
      {showLoginPage ? <SignUpPage /> : <LoginPage />}
      <button className='btn btn-primary text-center' onClick={handleToggle}>
        {showLoginPage ? 'Login' : 'Sign Up'}
      </button>
    </div>
  )
}

export default page