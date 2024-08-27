import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-purple-900 text-white p-4 py-6">
      <div className="text-xl font-bold">
        <a href="/Website-Portfolio">
          <img
            src={require("../img/Truth_transparant.PNG.webp")}
            alt="Prophet of Truth"
            className="w-39 h-24 rounded-lg"
          />
        </a>
      </div>
      <div>
        <a
          href="/Website-Portfolio/hobbies"
          className="mx-10 text-3xl hover:text-purple-500"
        >
          Hobbies
        </a>
        <a
          href="/Website-Portfolio/education"
          className="mx-10 text-3xl hover:text-purple-500"
        >
          Education
        </a>
        <a
          href="/Website-Portfolio/projects"
          className="mx-10 text-3xl hover:text-purple-500"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
