import React from "react";
import { Link } from "react-scroll";

const HobbiesSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <Link
          to="games"
          smooth={true}
          duration={500}
          className="text-white text-4xl cursor-pointer hover:text-gray-300"
        >
          Games
        </Link>
        <Link
          to="sports"
          smooth={true}
          duration={500}
          className="text-white text-4xl cursor-pointer hover:text-gray-300"
        >
          Sports
        </Link>
        <Link
          to="reading"
          smooth={true}
          duration={500}
          className="text-white text-4xl cursor-pointer hover:text-gray-300"
        >
          Reading
        </Link>
      </div>
    </div>
  );
};

export default HobbiesSidebar;
