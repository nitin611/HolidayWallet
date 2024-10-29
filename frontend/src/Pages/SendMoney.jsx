import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SendMoney = () => {
    const [amount, setAmount] = useState(); // State for amount
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner
    const location = useLocation();
    const { user: recipientUser } = location.state; // Retrieve the user object from location state
    const navigate = useNavigate();
    const { user, updateUser } = useContext(AuthContext);

    const handleTransfer = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsLoading(true); // Set loading to true when transfer starts

        try {
            const response = await axios.post(
                "https://holidaywallet.onrender.com/api/v1/account/transfer",
                {
                    to: recipientUser._id, // Use the user's ID here
                    amount
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token") // Fixed Authorization header
                    }
                }
            );

            if (response.status === 200) {
                toast.success("Transfer successful!");
                updateUser({ balance: user.balance - amount }); // Update user's balance immediately in AuthContext

                const updatedUserResponse = await axios.get(`https://holidaywallet.onrender.com/api/v1/user/${user._id}`, {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
                });
                updateUser(updatedUserResponse.data.user); // Update user balance immediately

                navigate('/dashboard'); // Navigate back to dashboard
            }
        } catch (error) {
            console.error("Error during transfer:", error.response?.data?.message || error.message);
            toast.error("Transfer failed: " + (error.response?.data?.message || "An error occurred"));
        } finally {
            setIsLoading(false); // Reset loading state after transfer
        }
    };

    return (
        <div className="min-h-screen bg-purple-50 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-8">Send Money</h1>
                <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white text-lg">
                        {user.firstName.charAt(0)}
                    </span>
                    <span className="ml-4 text-xl font-medium text-gray-700">{user.firstName}</span>
                </div>
                <form onSubmit={handleTransfer}>
                    <label className="block text-gray-700 text-lg mb-2">Amount (in Rs)</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mb-4"
                        placeholder="Enter amount"
                        value={amount} // Bind value to amount state
                        onChange={(e) => setAmount(Number(e.target.value))} // Update amount state on change
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition"
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <span className="loader mr-2"></span> Processing...
                            </div>
                        ) : (
                            "Initiate Transfer"
                        )}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

// CSS for the loader (spinner)
<style>
{`
  .loader {
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`}
</style>
