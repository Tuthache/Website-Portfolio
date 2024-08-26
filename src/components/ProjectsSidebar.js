import React from "react";

const ProjectsSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <a
          href="https://github.com/Tuthache/MangaMuse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          MangaMuse
        </a>
        <a
          href="https://github.com/Tuthache/MangaCat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl
          bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg
          hover:bg-blue-600 transition-colors"
        >
          MangaCat
        </a>
        <a
          href="https://github.com/johnnyn7/ExpenseTracker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Expense Tracker
        </a>
        <a
          href="https://github.com/Tuthache/SimStation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Simstation
        </a>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
