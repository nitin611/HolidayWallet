import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

export const SendMoney = () => {
    const [amount, setAmount] = useState(0);
    const location = useLocation();
    const { user: recipientUser } = location.state; // Retrieve the recipient user object from location state
    const navigate = useNavigate();
    const { user, updateUser } = useContext(AuthContext); // Get the current logged-in user and the update function

    const handleTransfer = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                { to: recipientUser._id, amount },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            );

            if (response.status === 200) {
                alert("Transfer Successful");

                // Fetch updated user data after transfer
                const updatedUserResponse = await axios.get(`http://localhost:3000/api/v1/user/${user._id}`, {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
                });

                // Update user data in AuthContext
                updateUser(updatedUserResponse.data);

                // Navigate back to the dashboard
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Error during transfer:", error.response?.data?.message || error.message);
            alert("Transfer failed: " + (error.response?.data?.message || "An error occurred"));
        }
    };

    return (
        <div className="min-h-screen bg-purple-50 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-8">Send Money</h1>
                <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white text-lg">
                        {recipientUser.firstName.charAt(0)}
                    </span>
                    <span className="ml-4 text-xl font-medium text-gray-700">
                        {recipientUser.firstName} {recipientUser.lastName}
                    </span>
                </div>
                <form onSubmit={handleTransfer}>
                    <label className="block text-gray-700 text-lg mb-2">Amount (in Rs)</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mb-4"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition"
                    >
                        Initiate Transfer
                    </button>
                </form>
            </div>
        </div>
    );
};
