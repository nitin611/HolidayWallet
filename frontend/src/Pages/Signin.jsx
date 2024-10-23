import React from 'react';

export const Signin = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-8">Sign In to HolidayWallet</h2>
                
                <form className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="you@example.com"
                        />
                    </div>
                    
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mt-2"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Forgot Password and Sign Up Links */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        <a href="#" className="text-purple-600 hover:underline">Forgot your password?</a>
                    </p>
                    <p className="text-gray-600 mt-4">
                        Don't have an account? 
                        <a href="/signup" className="text-purple-600 font-medium hover:underline"> Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
