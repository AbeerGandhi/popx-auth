import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center p-6">
      {/* Settings Button */}
      <button
        className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
        onClick={() => navigate("/settings")}
      >
        <FaCog size={22} />
      </button>

      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-600 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button
        className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4"
        onClick={() => navigate("/signup")}  // Navigate to Signup page
      >
        Create Account
      </button>

      <button
        className="w-full bg-purple-300 text-black-700 py-2 rounded-lg mt-2"
        onClick={() => navigate("/login")}  // Navigate to Login page
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default WelcomeScreen;
