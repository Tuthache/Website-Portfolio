import React from "react";
import { Link } from "react-scroll";

const ProjectsSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <Link
          to="mangamuse"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          MangaMuse
        </Link>
        <Link
          to="mangacat"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          MangaCat
        </Link>
        <Link
          to="expensetracker"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          Expense Tracker
        </Link>
        <Link
          to="simstation"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          Simstation
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
