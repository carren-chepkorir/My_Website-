import React from "react";
import Navbar from "./Navbar";
import AboutPic from "../assets/About.jpeg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <div className="flex flex-wrap flex-1">
          <div className="text-4xl font-bold ml-10 text-orange-600 ">
            <h1>Who I Am</h1>
          </div>
          <div className="text-xl leading-loose ml-10 mt-5">
            <p>
              Hello! I'm a passionate and ambitious software engineer with
              strong foundation in{" "}
              <span className="text-orange-600">Computer science</span> and a
              genuine love for coding. With a focus on{" "}
              <span className="text-orange-600">
                Javacript,React JS ,C#,.NET frameworks
              </span>{" "}
              I strive to create efficient and innovative solutions to complex
              problems.
            </p>
            <p>
              Throughout my academic journey and early professional experiences,
              I have gained hands-on experience in{" "}
              <span className="text-orange-600">
                software development methodologies, version control systems, and
                agile practices.
              </span>
              I am comfortable working both independently and as part of a
              collaborative team, and I thrive in dynamic and fast-paced
              environments.My ultimate goal is to grow and learn from
              experienced professionals in the industry while making a
              meaningful contribution to{" "}
              <span className="text-orange-600">projects</span> that have a
              positive impact. I am excited about the opportunities to work on
              challenging projects, collaborate with diverse teams, and tackle
              complex problems that push the boundaries of technology.Currently
              up-skilling on{" "}
              <span className="text-orange-600">
                Cloud Computing and Docker.
              </span>
            </p>
            <div className="mt-5">
              <Link className="underline text-orange-700 italic" to="/Projects">
                Check out some of my recent projects below
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap ml-10 justify-center mt-10">
          <img
            className="h-[450px] w-[350px] rounded-lg "
            src={AboutPic}
            alt="My pic here!"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
