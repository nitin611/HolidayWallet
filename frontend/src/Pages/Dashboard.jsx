import React, { useState } from 'react';

export const Dashboard = ({ username, balance }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search function: In your actual implementation, this would fetch real data
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    const results = users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <nav className="bg-purple-700 p-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HolidayWallet</h1>
          <p className="text-lg">Hello, {username}</p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-700">Your Balance</h2>
          <p className="text-4xl font-extrabold text-gray-900 mt-4">${balance}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-purple-700">Search Users</h2>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search by name or email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="mt-4 w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-6">
          {searchResults.length > 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-purple-700 mb-4">Search Results</h2>
              {searchResults.map(user => (
                <div key={user.id} className="flex justify-between items-center mb-4 p-4 border-b border-gray-300">
                  <div>
                    <p className="text-lg font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <button
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition"
                    onClick={() => alert(`Sending money to ${user.name}`)}
                  >
                    Send Money
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-6">No users found. Try searching again.</p>
          )}
        </div>
      </main>
    </div>
  );
};
