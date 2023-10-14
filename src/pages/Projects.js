import React from "react";
import Prj1 from "../assets/Prj1.png";
import Prj2 from "../assets/Prj2.png";
import Prj3 from "../assets/Prj3.jpg";
import Prj4 from "../assets/Prj4.png";
function Projects() {
  return (
    <div className="bg-neutral-950 h-max  ">
      <div className="text-center font-bold text-white text-3xl h-1/5 pt-8 max-md:text-xl">
        <h1>Here Some of My Projects!</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className=" bg-black text-white  w-9/12 flex m-10  max-md:flex-col  rounded-md max-md:w-10/12 ">
          <div className="w-80 max-md:p-10">
            <img src={Prj1} className=" w-56 rounded-lg " alt="Prj1" />
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold max-md:text-base ">
              Developed A Simple Calculator using React
            </h1>
            <p className="font-small pt-3 max-md:text-xs">
              In this project, we will explore the process of creating a basic
              calculator web application using the popular front-end library,
              React. This application will allow users to perform basic
              arithmetic calculations right in their web browsers.
            </p>
          </div>
        </div>
        <div className=" bg-black text-white  w-9/12 flex m-10  max-md:flex-col  rounded-md max-md:w-10/12 ">
          <div className="w-80 max-md:p-10">
            <img src={Prj2} className="w-56 rounded-lg " alt="prj2" />
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold max-md:text-base ">
              Developed A Full Stack Blog Webiste
            </h1>
            <p className="font-small pt-3 max-md:text-xs">
              Experienced Full Stack Web Developer with a strong background in
              building dynamic and responsive web application. Proficient in
              utilizing a range of technologies, including React, Node.js,
              Express, and MySQL. Ready to contribute expertise and passion to
              web development projects.
            </p>
          </div>
        </div>
        <div className=" bg-black text-white  w-9/12 flex m-10  rounded-md max-md:flex-col max-md:w-10/12 ">
          <div className="w-80 max-md:p-10">
            <img src={Prj3} className=" w-56 rounded-lg " alt="prj3" />
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold max-md:text-base ">
              Developed A Machine Learning model for Recommendation of Books.
            </h1>
            <p className="font-small pt-3 max-md:text-xs">
              In this project, we will explore the process of creating a basic
              calculator web application using the popular front-end library,
              React. This application will allow users to perform basic
              arithmetic calculations right in their web browsers.
            </p>
          </div>
        </div>
        <div className=" bg-black text-white  w-9/12 flex m-10  rounded-md max-md:flex-col max-md:w-10/12 ">
          <div className="w-80 max-md:p-10">
            <img src={Prj4} className=" w-56 rounded-lg " alt="prj3" />
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold max-md:text-base ">
              Developed A Machine Learning model for Recommendation of Books.
            </h1>
            <p className="font-small pt-3 max-md:text-xs">
              In this project, we will explore the process of creating a basic
              calculator web application using the popular front-end library,
              React. This application will allow users to perform basic
              arithmetic calculations right in their web browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
