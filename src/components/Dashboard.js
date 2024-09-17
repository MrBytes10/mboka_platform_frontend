//src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [amount, setAmount] = useState('');
  const [followedUser, setFollowedUser] = useState('');

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/purchase-airtime/', { amount }, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
      });
      alert('Airtime purchased successfully!');
    } catch (error) {
      console.error('Airtime purchase failed:', error);
    }
  };

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/follow/', { followed_username: followedUser }, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
      });
      alert('User followed successfully!');
    } catch (error) {
      console.error('Follow failed:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handlePurchase}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <button type="submit">Purchase Airtime</button>
      </form>
      <form onSubmit={handleFollow}>
        <input type="text" value={followedUser} onChange={(e) => setFollowedUser(e.target.value)} placeholder="Username to follow" required />
        <button type="submit">Follow User</button>
      </form>
    </div>
  );
}

export default Dashboard;