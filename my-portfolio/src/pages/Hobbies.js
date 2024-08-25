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
            <div className="mt-2 text-5xl space-y-10">
              My Hobbies
              <div id="games" className="mt-10 text-4xl">
                Gaming
                <p className="text-xl mt-8 ml-10 mr-10">
                  Since my early childhood I've always been fond of playing
                  games. Throughout different genres such as MMORPG, FPS,
                  Survival, Exploration, and many others I've enjoyed many
                  different types of games and their unique mechanics.
                </p>
              </div>
              <div id="sports" className="text-4xl">
                Sports
                <p className="text-xl mt-8 ml-10 mr-10"></p>
              </div>
              <div id="reading" className="text-4xl">
                Reading
                <p className="text-xl mt-8 ml-10 mr-10"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
