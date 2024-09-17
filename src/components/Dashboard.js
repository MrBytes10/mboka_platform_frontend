// src/components/Dashboard.js

import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [amount, setAmount] = useState('');
  const [followUser, setFollowUser] = useState('');

  const handleAirtimePurchase = async (e) => {
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

  const handleFollowUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/follow/', { followed_username: followUser }, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
      });
      alert('User followed successfully!');
    } catch (error) {
      console.error('Follow failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="max-w-3xl mx-auto space-y-8">
                    
                    {/* Follow User Section */}
                    <div className="bg-white shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Follow User
                        </h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                          <p>Enter the username of the person you want to follow.</p>
                        </div>
                        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleFollowUser}>
                          <div className="w-full sm:max-w-xs">
                            <label htmlFor="followUser" className="sr-only">
                              Username to follow
                            </label>
                            <input
                              type="text"
                              name="followUser"
                              id="followUser"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Username to follow"
                              value={followUser}
                              onChange={(e) => setFollowUser(e.target.value)}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Follow User
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* Airtime Purchase Section */}
                    <div className="bg-white shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Purchase Airtime
                        </h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                          <p>Enter the amount of airtime you want to purchase.</p>
                        </div>
                        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleAirtimePurchase}>
                          <div className="w-full sm:max-w-xs">
                            <label htmlFor="amount" className="sr-only">
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              id="amount"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Amount"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Buy Airtime
                          </button>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
