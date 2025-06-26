import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css"; // Ensure this path is correct
import Header from "./components/Header"; // ✅ Navbar Component
import Home from "./pages/about"; // ✅ If Home is about.jsx
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile"; // ✅ Import Profile Component

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Navbar added for navigation */}
      <div className="container text-center mt-20 p-6">
        <h1 className="text-3xl font-bold">Crowd Source Disaster Relief Platform</h1>
        <p className="text-gray-700 mt-2">Take Action Today - Support Those in Need</p>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} /> {/* ✅ Added Profile Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
