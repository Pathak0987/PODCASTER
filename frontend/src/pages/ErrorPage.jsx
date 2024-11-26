import React from 'react';

const ErrorPage = () => {
  return (
    <div className="h-screen bg-red-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Something went wrong. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-red-700 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorPage;
