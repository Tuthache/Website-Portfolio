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
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          MangaMuse
        </Link>
        <Link
          to="mangacat"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          MangaCat
        </Link>
        <Link
          to="expensetracker"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Expense Tracker
        </Link>
        <Link
          to="simstation"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Simstation
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
