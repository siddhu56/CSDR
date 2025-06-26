import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    localStorage.setItem("loggedInUser", username);
    window.location.href = "/about"; // Change to navigate("/about") if using React Router
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800">Login In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Password"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
        
        {/* Sign Up Option */}
        <div className="text-center mt-4">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");  // Add state for password
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = { email, password };  
//     login(userData);
//     navigate("/Home"); // Redirect to home after successful login
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
        
//         {/* Email input field */}
//         <input
//           type="email"
//           className="w-full p-2 border mb-2"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
        
//         {/* Password input field */}
//         <input
//           type="password"
//           className="w-full p-2 border mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}  
//           placeholder="Enter your password"
//           required
//         />
        
//         {/* Submit button */}
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;