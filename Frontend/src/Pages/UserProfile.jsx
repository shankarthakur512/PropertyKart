import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage
    const storedUserInfo = localStorage.getItem('userInfo');
    
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  if (!userInfo) {
    return <p className="text-center mt-16">No user information available</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-md rounded-lg pt-20">
     
     <h1 className=' text-center mb-5 text-2xl font-semibold'>{userInfo.Name.charAt(0).toUpperCase() + userInfo.Name.slice(1)}</h1>
      <div className="flex items-center space-x-6">
        <img
          src={userInfo.avatar || "https://via.placeholder.com/150"} 
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">{userInfo.name}</h2>
          <p className="text-gray-600 mt-1">{userInfo.email}</p>
          <p className="text-gray-600 mt-1">Phone: {userInfo.phone || "Not available"}</p>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">About</h3>
        <p className="text-gray-700 mt-2">
          {userInfo.about || "This user has not provided an about section yet."}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Recent Activity</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {userInfo.recentActivities && userInfo.recentActivities.length > 0 ? (
            userInfo.recentActivities.map((activity, index) => (
              <li key={index} className="mt-1">{activity}</li>
            ))
          ) : (
            <p className="text-gray-600">No recent activities.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
