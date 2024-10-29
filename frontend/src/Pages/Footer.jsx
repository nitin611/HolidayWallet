import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t py-2">
            <div className="flex justify-between items-center mx-auto max-w-screen-lg px-4">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/holiday-wallet.appspot.com/o/Blue%20Flat%20Illustrated%20Finance%20Company%20Logo.png?alt=media&token=1ea849b7-6b8f-40e9-88ff-200e297e7b80"
                        className="h-16"
                        alt="Logo"
                    />
                </Link>
                <div className="flex space-x-4 text-gray-700">
                    <Link to="/" className="hover:text-orange-700">Home</Link>
                    <Link to="/about" className="hover:text-orange-700">About</Link>
                    <a href="https://github.com/nitin611" target="_blank" rel="noreferrer" className="hover:text-orange-700">Github</a>
                </div>
            </div>
            <div className="mt-2 text-center text-sm text-gray-500">
                © 2024
                <a href="https://github.com/nitin611" className="hover:underline ml-1">
                    Nitin
                </a>
                . All Rights Reserved.
            </div>
        </footer>
    );
}
