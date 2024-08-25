import React from "react";
import { Link } from "react-scroll";

const HobbiesSidebar = () => {
  return (
    <div className="w-full bg-purple-600 p-4 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-20 w-full">
        <a
          href="https://tracker.gg/valorant/profile/riot/TeXas55%23HELO/overview?season=all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl
          bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg
          hover:bg-blue-600 transition-colors"
        >
          Valorant
        </a>
        <a
          href="https://halotracker.com/halo-infinite/profile/xbl/DaBoneGod/overview?experience=ranked&playlist=edfef3ac-9cbe-4fa2-b949-8f29deafd483"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl
          bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg
          hover:bg-blue-600 transition-colors"
        >
          Halo
        </a>
        <a
          href="https://www.beyondallreason.info/leaderboards"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center text-4xl
          bg-purple-900 rounded-lg cursor-pointer py-2 px-4 rounded-lg shadow-lg
          hover:bg-blue-600 transition-colors"
        >
          Beyond All Reason
        </a>
      </div>
    </div>
  );
};

export default HobbiesSidebar;
