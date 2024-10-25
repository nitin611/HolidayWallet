import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = ({ username }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    

    const handleSearch = async (e) => {
        setSearchQuery(e.target.value);
        // try searching-
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${searchQuery}`);
            setUsers(response.data.user);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    };

    const handleSendMoney = (user) => {
        navigate(`/sendMoney/${user._id}`, { state: { user } });
    };

    return (
        <div className="min-h-screen bg-purple-50">
           
            
            <main className="max-w-4xl mx-auto mt-8 p-8 bg-white shadow rounded-lg">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-purple-700">Your Balance: <span className="font-medium">1000</span></h2>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Users</h3>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <ul className="space-y-4">
                    {users.map(user => (
                        <li key={user._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-700 text-white text-lg">{user.firstName.charAt(0)}</span>
                                <div className="text-lg font-medium text-gray-700">{user.firstName} {user.lastName}</div>
                            </div>
                            <button
                                onClick={() => handleSendMoney(user)}
                                className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Send Money
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};
