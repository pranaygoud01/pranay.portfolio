import React from "react";
import Profile from "../assets/Profile.jpg";

function About() {
  return (
    <div className="h-screen bg-neutral-950 flex  justify-evenly items-center max-md:flex-col">
      <div className="w-44">
        <img src={Profile} alt=".." className="rounded-lg border-2" />
      </div>
      <div className="text-white w-1/2 max-md:w-10/12">
        <h1 className="text-4xl font-bold max-md:text-2xl">
          Hello!
          <br />
          I'm Pranay.
        </h1>
        <p className="text-normal pt-10 leading-8 max-md:text-sm">
          I'm a Computer Science Student at Sri indu College of Engineering and
          Technology.I am a highly motivated and self-driven individual with a
          strong work ethic. I am also a team player and I am able to work
          effectively with others. With a passion for innovation and a drive for
          continuous learning.
          <br />A passionate Full Stack Web Developer with an unwavering
          commitment to hard work. Their expertise in both front-end and
          back-end development is complemented by a unique flair for design,
          creating websites that are not only functional but visually
          captivating.
        </p>
      </div>
    </div>
  );
}

export default About;
