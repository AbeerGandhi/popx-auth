import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-purple-600">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-purple-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white font-semibold py-3 rounded-lg hover:bg-gray-500 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
