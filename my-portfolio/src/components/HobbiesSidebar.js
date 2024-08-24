import React from "react";
import { Link } from "react-scroll";

const HobbiesSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-40 w-full">
        <Link
          to="games"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Games
        </Link>
        <Link
          to="sports"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Sports
        </Link>
        <Link
          to="reading"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Reading
        </Link>
      </div>
    </div>
  );
};

export default HobbiesSidebar;
