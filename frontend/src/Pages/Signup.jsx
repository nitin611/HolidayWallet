import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show spinner
        const data = {
            username,
            password,
            firstName: firstname,
            lastName: lastname
        };
        try {
            const response = await axios.post("https://holidaywallet.onrender.com/api/v1/user/signup", data);
            toast.success("Signup successful! Welcome to HolidayWallet!");
            console.log("Response from server:", response.data);
            // Navigate('/signin')
        } catch (error) {
            if (error.response) {
                if (error.response.status === 411) {
                    toast.error("User already exists. Please sign in.");
                } else if (error.response.status === 400) {
                    toast.error("Incorrect inputs. Please check your details.");
                } else {
                    toast.error("An unexpected error occurred. Please try again.");
                }
            } else {
                toast.error("Server is unreachable. Check your connection.");
            }
        } finally {
            setLoading(false); // Hide spinner
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-8">Sign Up for HolidayWallet</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            name="firstName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="John"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading} // Disable button while loading
                        className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition flex justify-center items-center"
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?
                        <a href="/signin" className="text-purple-600 font-medium hover:underline"> Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
