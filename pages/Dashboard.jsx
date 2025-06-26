import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(storedDonations);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800">Donation Dashboard</h1>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Recent Donations</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">Donor</th>
                <th className="border p-3">Amount (INR ₹)</th>
                <th className="border p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.length > 0 ? (
                donations.map((donation, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-3">{donation.name}</td>
                    <td className="border p-3">₹{donation.amount}</td>
                    <td className="border p-3">{donation.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-4 text-gray-500">No donations yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
