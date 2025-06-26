import React from "react";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: "url('your-image-url-here')" }} // Replace with actual image URL
    >
      <h1 className="text-5xl font-bold">Fundaiser for disaster relief</h1>
      <h2 className="text-2xl mt-2">Take Action Today</h2>
      <a
        href="#"
        className="mt-6 bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
      >
        Join the movement
      </a>
    </div>
  );
}
