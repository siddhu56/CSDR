// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const user = localStorage.getItem("loggedInUser"); // Fetch user from localStorage

//   const logout = () => {
//     localStorage.removeItem("loggedInUser"); // Remove user on logout
//     window.location.href = "/login"; // Redirect to login
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-blue-600 text-blue p-4 flex justify-between items-center shadow-md z-50">
//       <h1 className="text-xl font-bold">CSDR</h1>
      
//       {/* Mobile Menu Icon */}
//       <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={20} /> : <Menu size={20} />}
//       </div>

//       {/* Navigation Links */}
//       <nav className={`md:flex gap-5 ${isOpen ? "block" : "hidden"} absolute md:relative bg-blue-600 w-full md:w-auto top-16 left-0 md:top-0 md:left-auto shadow-md md:shadow-none p-5 md:p-0`}>
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/donate" className="hover:underline">Donate</Link>
//         <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//         <Link to="/profile" className="hover:underline">Profile</Link>
        
//         {user ? (
//           <>
//             <Link to="/profile" className="font-semibold hover:underline">Welcome, {user}</Link>
//             <button onClick={logout} className="ml-2 bg-red-500 px-3 py-1 rounded">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
//             <Link to="/register" className="bg-yellow-500 px-3 py-1 rounded">Register</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem("loggedInUser"); // Fetch user from localStorage

  const logout = () => {
    localStorage.removeItem("loggedInUser"); 
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-xl font-bold">CSDR</h1>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </div>

      {/* Navigation Links */}
      <nav
        className={`md:flex gap-5 ${
          isOpen ? "block" : "hidden"
        } absolute md:relative bg-blue-600 w-full md:w-auto top-16 left-0 md:top-0 md:left-auto shadow-md md:shadow-none p-5 md:p-0`}
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>

        {user && (
          <>
            <Link to="/donate" className="hover:underline">
              Donate
            </Link>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </>
        )}

        {user ? (
          <>
            <span className="font-semibold">Welcome:{user}</span>
            <button
              onClick={logout}
              className="ml-2 bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-green-500 px-3 py-1 rounded hover:bg-green-700">
              Login
            </Link>
            <Link to="/register" className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
