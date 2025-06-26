import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage (replace with API call if needed)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <p className="text-center mt-10 text-xl">No user data found. Please sign up.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">User Profile</h2>
        
        <div className="space-y-4">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Pincode:</strong> {user.pincode}</p>
        </div>

        <div className="text-center mt-6">
          <a href="/edit-profile" className="text-blue-500 hover:underline">Edit Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;

