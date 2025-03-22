import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-80 text-center">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md mb-3" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mb-3" />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded-md mb-3" />
      <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 mb-3">Sign Up</button>
      <p className="text-gray-500">Already have an account? <span className="text-purple-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default CreateAccount;