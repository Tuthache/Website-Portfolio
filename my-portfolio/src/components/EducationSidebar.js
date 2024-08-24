import React from "react";
import { Link } from "react-scroll";

const EducationSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <Link
          to="earlyEducation"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          Early Education
        </Link>
        <Link
          to="currenteducation"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          Current Education
        </Link>
        <Link
          to="extracurriculars"
          smooth={true}
          duration={500}
          className="text-white text-center text-4xl cursor-pointer hover:text-gray-300"
        >
          Extra Curriculars
        </Link>
      </div>
    </div>
  );
};

export default EducationSidebar;
