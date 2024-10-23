import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Experience the Ease of Transfers With 
                            <span className="hidden sm:block text-4xl text-purple-600">HolidayWallet</span>
                        </h2>
                        <p className="text-lg sm:text-xl mt-4 text-gray-700">
                            Your personal digital wallet to make secure money transfers between friends, anytime, anywhere.
                        </p>
                        <Link
    className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
    to="/"
>
<img 
        src="https://i.ibb.co/7YwxgQ1/wallet.png" 
        alt="HolidayWallet Icon" 
        width="24" 
        height="24"
    />
    &nbsp; Transfer Now
</Link>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-5 pt-12  h-full">
                    <img className="w-96" src="https://firebasestorage.googleapis.com/v0/b/holiday-wallet.appspot.com/o/Colored%20Gradient%20Illustration%20E-Wallet%20Instagram%20Post.png?alt=media&token=a3919647-7dd0-4c6b-a6ec-e0327bcf00ec" alt="HolidayWallet illustration" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-80 w-48" src="https://firebasestorage.googleapis.com/v0/b/holiday-wallet.appspot.com/o/Purple%20Digital%20Wallet%20illustration%20Instagram%20Post.png?alt=media&token=752bbfb8-5bbc-4cef-ba25-0abcd37141fa" alt="HolidayWallet transfer illustration" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Welcome to <p className="text-purple-500 text-2xl font-bold">HolidayWallet</p>
            </h1>
            <p className="text-center text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                HolidayWallet makes it simple for you to transfer funds to your friends or split expenses during vacations, holidays, or daily life. 
                With our app, you can send and receive money instantly, all in a secure and user-friendly environment.
            </p>
        </div>
    );
}
