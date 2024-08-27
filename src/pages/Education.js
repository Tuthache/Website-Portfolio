import React from "react";
import Navbar from "../components/Navbar";
import EducationSidebar from "../components/EducationSidebar";

const Education = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-solid border-b-2 border-black">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/6 border-r-2 border-black">
          <EducationSidebar />
        </div>

        <div className="flex-1 bg-gray-600 overflow-y-auto text-center text-white">
          <div className="container mx-auto py-12">
            <div className="mt-2 text-5xl space-y-10">
              My Education
              <div id="games" className="mt-10 text-4xl">
                School
                <p className="text-xl mt-8 ml-10 mr-10">
                  My first exposure to coding came with my first AP Computer
                  Science class I took in my junior year of highschool! AP
                  Computer Science Principles was where I first learned how to
                  code in Javascript, I was initially introduced to coding
                  through coding blocks on Codecademy. I developped this
                  interest into programming throughout college working with
                  others on projects and making projects myself.
                </p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/SJSU.jpg")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-2xl mt-8 ml-10 mr-10">
                  University Computer Science Courses
                </p>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Throughout my time in university I've had the pleasure of
                  learning from some of the best professors. I've learned more
                  about how computers function in the low-level as well as how
                  different algorithms work and their purpose. I also learned
                  how to implement these different algorithms and their natural
                  use cases for future application I may create.
                </p>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Computer Science Courses:
                </p>
                <div className="flex justify-center">
                  <ul className="list-disc text-xl font-bold mt-4 ml-10 mr-10">
                    <li>CS 146 - Data Structures and Algorithms</li>
                    <li>CS 147 - Computer Architecture</li>
                    <li>CS 149 - Operating Systems</li>
                    <li>CS 151 - Object Oriented Design</li>
                    <li>CS 152 - Programming Paradigms</li>
                    <li>CS 157A - Intro to Database Management Systems</li>
                    <li>CS 158A - Computer Networks</li>
                    <li>CS 171 - Intro to Machine Learning</li>
                    <li>
                      CS 154 - Formal Language & Computability | In Progress
                    </li>
                    <li>CS 166 - Information Security | In Progress</li>
                  </ul>
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">Math Courses:</p>
                <div className="flex justify-center">
                  <ul className="list-disc text-xl font-bold mt-4 ml-10 mr-10">
                    <li>MATH 30 - Calculus I</li>
                    <li>MATH 31 - Calculus II</li>
                    <li>MATH 39 - Linear Algebra I</li>
                    <li>MATH 42 - Discrete Mathematics</li>
                  </ul>
                </div>
              </div>
              <div id="reading" className="text-4xl">
                Extracurriculars
                <p className="text-2xl mt-8 ml-10 mr-10">Spartan Gaming</p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/spartangaming.PNG")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Spartan Gaming is a club which encourages members to socialize
                  with other gamers and helps organize games between members.
                  The club hosts weekly tournaments and has an in-person
                  location located near the main campus. I've enjoyed reading
                  through discussions and trying to understand different
                  viewpoints on what makes games fun and what others think are
                  good.
                </p>
                <p className="text-2xl mt-8 ml-10 mr-10">
                  Society of Computer Engineers
                </p>
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/sce.ico")}
                    alt="bar tournament"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  The Society of Computer Engineers is a club in SJSU that
                  provides many resources to help students of computer
                  engineering and computer science to take advantage of. I enjoy
                  in partaking the daily leetcode question and comparing my
                  results to others within the club discord to see areas in
                  which I can improve in. They also provide many workshops that
                  students can get involved with and learn from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
