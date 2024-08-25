import React from "react";
import Navbar from "../components/Navbar";
import ProjectsSidebar from "../components/ProjectsSidebar";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-solid border-b-2 border-black">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/6 border-r-2 border-black">
          <ProjectsSidebar />
        </div>

        <div className="flex-1 bg-gray-600 overflow-y-auto text-center text-white">
          <div className="container mx-auto py-12">
            <div className="mt-2 text-5xl space-y-10">
              My Projects
              <div id="mangamuse" className="mt-10 text-4xl">
                MangaMuse
                <p className="text-xl mt-8 ml-10 mr-10">
                  MangaMuse is the manga recommendation algorithm to be used
                  with my other application Mangacat. This project will be my
                  first time trying to build a Machine Learning model. The
                  algorithm is content-based and utilizes datapoints from the
                  Anilist api such as popularity score as well as the different
                  types of genres the manga follows. This model will be trained
                  on the 1000 manga housed on the MangaCat application.
                </p>
              </div>
              <div id="mangacat" className="text-4xl">
                MangaCat
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/mangacat.PNG")}
                    alt="MangaCat"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  MangaCat is my first attempt at a three tier architecture done
                  solo. This application allows uses to add and remove manga
                  from their personal list. Users are also given the ability to
                  rate manga and set their reading status of manga that they
                  have added into their own user list. This application was
                  written in Javascript and MySQL alongside using the react
                  bootstrap framework as well as working with other Javascript
                  techonologies such as node and express. My favorite part of
                  working on this project was facilitating the communication
                  between the 3 different layers of the architecture by setting
                  up different api endpoints allowing the frontend to
                  communicate to the backend which would then send queries to
                  the database.
                </p>
              </div>
              <div id="expensetracker" className="text-4xl">
                ExpenseTracker
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/expensetracker.PNG")}
                    alt="MangaCat"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Expense Tracker is an application created using the react
                  bootstrap framework. This project was completed with a team of
                  three. For this application I was tasked with working mainly
                  on the backend and setting up the api endpoints to communicate
                  user information. This project helped me work on my
                  communication skills as I regularly had to work on different
                  parts of the project for short amounts of time to help out my
                  teammates. It also helped encourage me to communicate with my
                  teammates more on whether I needed help myself.
                </p>
              </div>
              <div id="simstation" className="text-4xl">
                Simstation
                <div className="flex justify-center mt-8">
                  <img
                    src={require("../img/simstationplague.PNG")}
                    alt="MangaCat"
                    className="w-[50%] h-auto rounded border-black border-2"
                  />
                </div>
                <p className="text-xl mt-8 ml-10 mr-10">
                  Simstation is a Java application which showcases the usage of
                  multithreading in Java. This project was my first big team
                  project which helped demonstrate to me how to utilize version
                  control. Simstation helped expose me towards the different git
                  actions such as making pull requests and merging different
                  branches. This project helped expand my Java knowledge by
                  allowing me to create a simulation which simulated a spreading
                  plague. The spread rate of the plague is adjustable alongside
                  the likelihood for an agent to resist the plague from
                  spreading to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
