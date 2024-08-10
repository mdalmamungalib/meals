import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-r-4 border-blue-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-b-4 border-blue-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-l-4 border-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
