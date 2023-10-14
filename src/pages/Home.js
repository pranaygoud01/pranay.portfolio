import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home flex items-center pl-40 bg-neutral-950 h-screen max-md:p-10  ">
      <div>
        <h1 className="text-white text-5xl font-bold max-md:text-3xl">
          I'm Pranay
        </h1>
        <p className=" text-gray-400 text-3xl font-bold pt-3 max-md:text-2xl ">
          Full Stack Web Developer
        </p>
        <div className="text-white pt-3 text-2xl">
          <Link
            className="pr-3"
            to="https://github.com/pranaygoud01"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            to="https://www.linkedin.com/in/pranaygoud1229/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
