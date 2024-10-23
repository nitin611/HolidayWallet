import React from 'react';

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-purple-50 py-16 px-6 sm:px-12">
            {/* Header */}
            <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-16">Get in Touch with Us</h1>
            
            {/* Main Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Contact Form */}
                <div className="bg-purple-50 p-10 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4 text-center">Drop Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    {/* Contact Info Section */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl font-semibold text-purple-700 mb-4">Reach Us At</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            We’d love to hear from you! Reach out to us at:
                        </p>
                        <p className="text-lg font-bold text-gray-800 mb-2">
                            Email: <span className="text-purple-600">support@holidaywallet.com</span>
                        </p>
                        <p className="text-lg font-bold text-gray-800">
                            Phone: <span className="text-purple-600">+1 123-456-7890</span>
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-6">
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-8 h-8" />
                            </a>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" className="w-8 h-8" />
                            </a>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>

                    {/* Office Address Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Location</h3>
                        <p className="text-lg text-gray-600">
                            123 Holiday Wallet Street, Suite 100, <br /> 
                            New York, NY 10001
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
