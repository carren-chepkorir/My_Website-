import React from "react";
import Techw1 from "../assets/mvc.jpeg";
import Techw2 from "../assets/Techwrite.webp";
import Techw3 from "../assets/Techwrite2.webp";

const TechwriteContent = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-row ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold  ">Blog</h1>
          <p className="flex leading-loose">
            I love documenting my work and teaching other Developers. Here are
            some of my Articles have written on
            <a href="https://dev.to/carrenchepkorir/" className="href">
              <span className="text-orange-500 ml-2">Dev.io</span>
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center ">
          <div className="transform  bg-white transition duration-400 hover:scale-125 hover:bg-white">
            <img className="h-[350px] w-[500px]" src={Techw1} alt="" />
            <h2 className="text-orange-500 text-2xl font-semibold ">
              Routing in MVC
            </h2>
            <p>
              In this article ,i will explains routing in MVC. How a route in
              MVC is executed by the routing engine and how to define a route
              for a URL
            </p>

            <div className="flex flex-wrap justify-center items-center">
              <a
                href="https://dev.to/carrenchepkorir/routing-in-mvc-56mm"
                className=""
              >
                <button className="py-2 px-3 rounded-lg bg-slate-300 text-center">
                  READMORE
                </button>
              </a>
            </div>
          </div>
          <div className="md:ml-5 transform  bg-white transition duration-400 hover:scale-125 hover:bg-white">
            <img className="h-[350px] w-[500px]" src={Techw2} alt="" />
            <h2 className="text-orange-500 text-2xl font-semibold">
              Mastering Technical Writing
            </h2>
            <p>
              This article is a step by step guide for beginners in Technical{" "}
              <br></br>writing.Mastering Technical writing requires a <br></br>
              combination of skills,techniques and practices.It entails what is
              Technical writing,Essential Tips and Technique and the impact on
              the Industry.
            </p>
            <div className="flex flex-wrap justify-center tems-center">
              <a
                href="https://dev.to/carrenchepkorir/mastering-technical-writingultimate-guide-for-beginners-40j9"
                className="href"
              >
                <button className="py-2 px-3 rounded-lg bg-slate-300 text-center i">
                  READMORE
                </button>
              </a>
            </div>
          </div>
          <div className="md:ml-5 transform  bg-white transition duration-400 hover:scale-125 hover:bg-white">
            <img className="h-[350px] w-[500px]" src={Techw3} alt="" />
            <h2 className="text-orange-500 text-2xl font-semibold  ">
              Importance of staying updated with emerging trends in technical
              writing.
            </h2>
            <p>
              In this article,we are going to discuss the importance of staying
              updated as a Technical writer with the Technology trends and
              impact of the same.
            </p>
            <div className="flex flex-wrap justify-center items-center">
              <a
                href="https://dev.to/carrenchepkorir/importance-of-staying-updated-with-emerging-trends-in-technical-writing-4a3e"
                className="href"
              >
                {" "}
                <button className="py-2 px-3 rounded-lg bg-slate-300 text-center">
                  READMORE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechwriteContent;
