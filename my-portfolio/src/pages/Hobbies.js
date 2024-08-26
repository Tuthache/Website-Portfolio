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
                  different types of games and their unique mechanics. My
                  original online username came in reference to Halo!
                </p>
                <p className="text-2xl mt-8 ml-10 mr-10">Beyond All Reason</p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/bartournament.PNG")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Beyond All Reason is my first experience playing the old Total
                  Annihilation style real time strategy games. I started playing
                  BAR during the summer of 2023 and quickly found the gameplay
                  intuitive, easy to learn, and fun to play. Unlike many other
                  games following the Starcraft 2 style of RTS gameplay, BAR
                  features many quality of life features. BAR development is
                  open source and I like to modify some of the widgets shared by
                  users on the BAR discord to suit my needs.
                </p>
                <p className="text-xl mt-8 ml-10 mr-10">
                  I have participated in multiple BAR tournaments with varying
                  results, but have loved working together with my team to come
                  up with strategies that give us the best chance of winning. My
                  favorite part of these tournaments is being able to play the
                  high quality games that come with each tournament and testing
                  my current capabilities against some of the best BAR players.
                </p>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Here are some of the tournaments I've participated in:
                </p>
                <div className="flex justify-center">
                  <ul className="list-disc text-xl font-bold mt-4 ml-20 mr-10">
                    <li>BAR Omega Series Season 1 5v5 | 2nd Place</li>
                    <li>BAR Pro League Season 2 1v1 | 16-32rd Place</li>
                    <li>BAR Nation Wars Season 2 4v4 | 4th Place</li>
                    <li>BAR Omega Series Season 2 5v5 | 1st Place</li>
                  </ul>
                </div>
                <a
                  href="https://www.twitch.tv/videos/2227956116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 text-center text-2xl
            cursor-pointer py-2 px-4 
          hover:text-blue-600 transition-colors"
                >
                  Omega Series Season 2 Finals Day
                </a>
                <p className="text-2xl mt-8 ml-10 mr-10">Halo & Valorant</p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/haloinfinite.jpg")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Halo was my first introduction to the First Person Shooter
                  genre. It is also the first game series that I followed
                  extensively due to its popularity with my cousins and close
                  family. Back when I was younger my parents would leave me in
                  my grandparents care when they were busy with work. It was at
                  this time where I would play Halo with my older cousins
                  battling through the campaign or online together. I still like
                  to play Halo occasionally with family. Most notably I've gone
                  through the entire mainline series playing through it in
                  chronological order based upon when they take place in the
                  timeline on legendary difficulty.
                </p>
                <p className="text-xl mt-8 ml-10 mr-10">
                  I started playing Valorant during the advent of Covid-19 and
                  amidst the lockdown requirements bringing classes online. This
                  was a crucial time in my life where my lifestyle drastically
                  changed thanks to the lockdown procedures and playing valorant
                  with my friends helped alleviate the mental burden of the
                  social distancing and lockdown. Playing Valorant with my
                  friends during Covid-19 housed some of the funniest momments
                  throughout that time period.
                </p>
              </div>
              <div id="sports" className="text-4xl">
                Reading
                <p className="text-2xl mt-8 ml-10 mr-10">
                  Light Novels, Manga/Manhwa, and Anime
                </p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/anime.PNG")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/mangalightnovel.PNG")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Ever since my cousin first introduced Anime to me early in my
                  childhood I've always been a fan of the storytelling alongside
                  the beautiful animations. Eventually I expanded my sights
                  towards Manga and Manhwa reading several chapters a day. What
                  I loved about Manga was the ability to read on the fly and
                  seeing the well drawn art. This would eventually contribute to
                  my decision to make MangaCat. I also eventually found joy in
                  reading different light novels due to their descriptive
                  writing as well.
                </p>
              </div>
              <div id="reading" className="text-4xl">
                Sports
                <p className="text-xl mt-8 ml-10 mr-10">
                  Throughout my early life I've participated in multiple sports
                  to stay healthy. The physical activities that I've enjoyed the
                  most are swimming, basketball, and running. Up until
                  highschool I was part of a local swim team and enjoyed my time
                  socializing and racing others. Basketball and running I never
                  was able to compete competitively, but I still love to do
                  recreationally with friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
