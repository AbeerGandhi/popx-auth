import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>

        <div className="mt-4 flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">Marry Doe</h3>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Settings;
