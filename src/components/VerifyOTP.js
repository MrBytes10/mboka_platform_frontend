//src/components/VerifyOTP.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function VerifyOTP() {
  const [otp, setOTP] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/verify-otp/', { code: otp }, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
      });
      history.push('/dashboard');
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" required />
      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default VerifyOTP;