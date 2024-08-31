import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r text-center p-8">
      <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-yellow-300 rounded-full hover:bg-yellow-400 transition-colors"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
