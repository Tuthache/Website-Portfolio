import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-solid border-b-2 border-black">
        <Navbar />
      </div>
      <div className="bg-gray-600 h-screen text-center text-white">
        <div className="mt-10 text-4xl font-bold">About Me</div>
        <p className="text-xl mt-8 ml-20 mr-20">
          Hello! I'm Austin, currently a student of San Jose State University in
          my 4th year trying to complete my Bachelor's degree in Computer
          Science. I am also working towards finishing a Mathematics Minor
          alongside my Computer Science degree. I also enjoy playing and hanging
          out with my dog, Lucy, she's a chihuahua mix breed.
        </p>
        <div className="flex justify-center mt-8">
          <img
            src={require("../img/IMG_4419.jpg")}
            alt="bar tournament"
            className="w-40 h-auto rounded border-black border-2"
          />
        </div>
        <div className="mt-10 text-4xl font-bold">Contact Info</div>
        <p className="text-xl mt-8 ml-20 mr-20">
          Email: austinnguyen445@gmail.com
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/austin-nguyen-software-engineer/ "
            className="text-xl mt-8 ml-10 mr-10"
          >
            LinkedIn:
            https://www.linkedin.com/in/austin-nguyen-software-engineer/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
