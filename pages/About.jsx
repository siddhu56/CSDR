import React from "react";

const DisasterFund = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold">CSDR</h1>
        <p className="mt-4 text-gray-700 text-lg">
          When disasters strike, immediate action is crucial.
          <strong>Our Disaster Relief</strong> provides urgent assistance to affected communities, 
          ensuring access to food, clean water, medical aid, and shelter. Your contributions help 
          rebuild lives, restore infrastructure, and support long-term recovery efforts.
        </p>
        <p className="mt-4 font-semibold text-gray-800">
          <em>Every donation makes a difference.</em> Join us in bringing hope and relief to those in need.
        </p>
        <button 
          onClick={() => window.location.href = "/login"}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DisasterFund;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import Login from "./Login";
// import Register from "./Register";
// import Home from "./Home";
// import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <h1>Crowd Source Disaster Relief Platform</h1>
//         <p>Take Action Today</p>
        
//         <Link to="/login" className="join-button">Login</Link>
//         <Link to="/register" className="join-button">Register</Link>
        
//         {/* Routes */}
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;