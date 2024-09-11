import React from "react";

const Loader = () => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center animate-ping">
        <img
          src="/main-logo.png"
          alt="Loading..."
          className="bg-customBlue p-3 pt-0 rounded-full flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Loader;
