import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-purple-50">
      <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-4/12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/holiday-wallet.appspot.com/o/Purple%20Digital%20Wallet%20illustration%20Instagram%20Post.png?alt=media&token=752bbfb8-5bbc-4cef-ba25-0abcd37141fa"
              alt="HolidayWallet"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl font-extrabold text-purple-900 md:text-5xl">
              Welcome to HolidayWallet
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-700">
              HolidayWallet is the perfect platform for secure and fast money transfers among friends. 
              Designed to be user-friendly, HolidayWallet allows you to send and receive funds with just a 
              few taps, making it ideal for splitting bills, sending gifts, or just keeping the holiday spirit alive!
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-700">
              Our vision is to create a community-oriented, reliable digital wallet that you can trust. With 
              advanced encryption technology, HolidayWallet ensures that your transactions are secure, giving 
              you peace of mind while transferring money.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-700">
              We believe in providing a seamless, enjoyable experience for users. Whether it's during holidays 
              or any day, you can count on HolidayWallet for easy and safe transactions. Join us and start 
              transferring money smarter, faster, and safer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
