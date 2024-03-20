import React from "react";

const Loaders = () => {
  return (
    <div className="flex h-dvh">
      <div className="sm:flex-1 hidden sm:block bg-gray-200"></div>
      <div className="flex-grow gap-4">
        {Array.from({length: 10}).map((_, index) => (
            <div key={index} className="bg-gray-200 h-20 m-4 rounded-lg"></div>
        ))}
      </div>
      <div className="md:flex-1 hidden md:block bg-gray-200"></div>
    </div>
  );
};

export default Loaders;
