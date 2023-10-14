import React from "react";
import java from "../assets/java.png";
import html from "../assets/html.png";
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";

function Skills() {
  return (
    <div className="h-fit bg-neutral-950">
      <div className="text-4xl font-bold text-center text-white p-10 max-md:text-xl max-md:p-5">
        <h1>Skills</h1>
      </div>
      <div>
        <div className="flex justify-evenly max-md:flex-wrap ">
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={react} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              React
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={express} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              Express
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={nodejs} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              Node Js
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={mysql} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              MySQL
            </p>
          </div>
        </div>
        <div className="flex justify-evenly max-md:flex-wrap ">
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={html} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              HTML
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={tailwind} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              Tailwind
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={java} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              Java
            </p>
          </div>
          <div className="bg-black p-10 m-4 w-1/6 rounded-md max-md:w-1/3">
            <img src={python} alt="..." className="" />
            <p className="text-center text-white font-bold pt-10 text-2xl max-md:text-sm">
              Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
