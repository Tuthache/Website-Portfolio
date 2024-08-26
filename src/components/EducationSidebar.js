import React from "react";

const EducationSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <a
          href="https://www.instagram.com/sjsuspartangaming/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Spartan Gaming
        </a>
        <a
          href="https://sce.sjsu.edu/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl
          bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg
          hover:bg-blue-600 transition-colors"
        >
          SCE SJSU
        </a>
        
      </div>
    </div>
  );
};

export default EducationSidebar;
