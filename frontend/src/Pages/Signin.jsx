import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { username, password };
        setLoading(true); // Start loading

        try {
            const response = await axios.post("https://holidaywallet.onrender.com/api/v1/user/signin", data);
            const userData = response.data;
            login(userData);

            if (userData.token) {
                toast.success("Signin successful!");
                navigate('/dashboard');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 411) {
                    toast.error("Incorrect input. Please try again.");
                } else if (error.response.status === 400) {
                    toast.error("Invalid credentials. Please check your username and password.");
                } else {
                    toast.error("An unexpected error occurred. Please try again.");
                }
            } else {
                toast.error("Server is unreachable. Check your connection.");
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            {loading ? (
                <div className="w-full max-w-md text-center p-8 rounded-lg shadow-lg bg-white">
                    <div className="loader border-t-4 border-purple-600 border-solid rounded-full w-12 h-12 mx-auto animate-spin"></div>
                    <p className="mt-4 text-lg font-semibold text-purple-700">Signing you in...</p>
                </div>
            ) : (
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-8">Sign In to HolidayWallet</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                            className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mt-4">
                            Don't have an account?
                            <a href="/signup" className="text-purple-600 font-medium hover:underline"> Sign Up</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
