import React from "react";
import Navbar from "../components/Navbar";
import HobbiesSidebar from "../components/HobbiesSidebar";

const Hobbies = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-solid border-b-2 border-black">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/6 border-r-2 border-black">
          <HobbiesSidebar />
        </div>

        <div className="flex-1 bg-gray-600 overflow-y-auto text-center text-white">
          <div className="container mx-auto py-12">
            <div className="mt-2 text-4xl font-bold">My Hobbies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
