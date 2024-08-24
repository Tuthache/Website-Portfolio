import React from "react";
import Navbar from "../components/Navbar";

const Hobbies = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-solid border-b-2 border-black">
        <Navbar />
      </div>
      <div className="bg-gray-600 h-screen text-center text-white">
        <div className="mt-10 text-4xl font-bold">My Hobbies</div>
      </div>
    </div>
  );
};

export default Hobbies;
