import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="h-96  bg-black flex items-center justify-evenly text-white font-bold max-md:flex-col max-md:text-center">
      <div className="flex flex-col ">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex  flex-row items-center w-60 justify-evenly ">
        <Link to="https://github.com/pranaygoud01" target="_blank">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/pranaygoud1229/" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link to="mailto:pranaygoudpalle123@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
        <Link to="https://www.instagram.com/pranayygoud/" target="_blank">
          <InstagramIcon />
        </Link>
      </div>
      <div className="row text-white leading-5 font-extralight text-xs w-64">
        <p className="font-bold text-base">2023 | &copy; Copyright Pranay</p>
        <p>Developed by React & Tailwind.CSS</p>
      </div>
    </div>
  );
}

export default Footer;
