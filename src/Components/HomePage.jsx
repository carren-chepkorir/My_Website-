import React from "react";
import Navbar from "./Navbar";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import AboutMeContent from "./AboutMeContent";

import AchievementsContent from "./AchievementsContent";

import TechwriteContent from "./TechwiteContent";
import ProjectsComponent from "./ProjectsComponent";
import ContactContent from "./ContactContent";

const HomePage = () => {
  return (
    <div className="h-[100vh] md:pl-[250px] md:pr-[250px] ">
      <Navbar />

      <div className="flex flex-wrap  flex-col ">
        <div className="flex flex-wrap flex-row justify-center items-center">
          <div className="flex flex-col ">
            {" "}
            <h1 className=" justify center items-center md:text-6xl span text-[#5b7c99] leading-loose text-bold ">
              Hi,I am Carren Chepkorir
            </h1>
            <p className="md:inline-flex md:text-4xl font-bold text-orange-600 h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
              Passionate Software Developer
            </p>
          </div>
        </div>
        <div className="ml-3 md:flex flex-wrap leading-loose md:pt-6 flex-row justify-center items-center">
          <p>
            Looking for a full-stack developer with a track record of success?
            Look no further!With completion of a bachelor's degree in Computer
            <br></br>
            Science and also various hands-on experience have gained through
            programming projects and bootcamps ,I have the immense ability and
            <br></br>
            passion to create scalable and intuitive UIs.I have a solid
            experience in analysis,design,development and implementation of
            various <br></br>application using JavaScript/React,Typescript and
            C# .NET.I love the fact that I could make an impact to people via my
            code, whatever <br></br>tool i could build to help them solve their
            daily life sounds super exciting to me.Let's build something
            together!
          </p>
        </div>
      </div>
      <div className="flex flex-row space-between md:space-x-10 flex-wrap mt-5 justify-center items-center ">
        <div className="ml-5">
          <a href="https://github.com/carren-chepkorir" className="href">
            <FaGithub size={50} />
          </a>
        </div>
        <div className="ml-5">
          {" "}
          <a
            href="https://www.linkedin.com/in/carren-chepkorir-24a4ba220/"
            className="href"
          >
            <FaLinkedinIn size={50} />
          </a>
        </div>
        <div className="ml-5">
          {" "}
          <a href="tel:+254742295861" className="href">
            <FaPhone size={50} />
          </a>
        </div>

        <div className="ml-5">
          {" "}
          <a href="https://wa.me/254742295861" className="href">
            <FaWhatsapp size={50} />
          </a>
        </div>
        <div className="ml-5">
          <a href="https://twitter.com/CarrenChepkori4" className="href">
            <FaTwitter size={50} />
          </a>
        </div>
      </div>
      <AboutMeContent />
      <AchievementsContent />
      <TechwriteContent />
      <ProjectsComponent />
      <ContactContent />
    </div>
  );
};

export default HomePage;
