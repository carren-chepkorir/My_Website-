import React from "react";
import Image13 from "../assets/Creatify.png";
import Image14 from "../assets/Beauty.png";
import Image15 from "../assets/Gym.png";
import Image16 from "../assets/Portfolio.png";
import Image17 from "../assets/Adanian.png";

import Image18 from "../assets/Capture.png";

const Project = () => {
  return (
    <div>
      <div className="m-10">
        <h1 className="text-4xl font-bold">Some of my Recent Projects</h1>
        <p1>
          Here are some of my recent Projects.I used React.Js for frontend and
          Tailwind Css for Styling ,C# and .NET frameworks.
        </p1>
        <div className="flex flex-wrap flex-col m-8">
          <div className="flex flex-wrap flex-row space-x-10 ml-[200px] container  ">
            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image13}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold ">Travel App Website</h1>
                <p className="text-white font-bold">
                  React.Js and Tailwind CSS
                </p>
                <a
                  href="https://github.com/carren-chepkorir/Travel-App-.git"
                  className="href"
                >
                  <button className="btn bg-orange-500   text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image14}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold ">BeautyApp</h1>
                <p className="text-white font-bold">
                  React.Js and Tailwind CSS
                </p>
                <a
                  href="https://github.com/carren-chepkorir/addToCart-.git"
                  className="href"
                >
                  {" "}
                  <button className="btn bg-orange-500   text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-row container ml-[200px] space-x-10 mt-5">
            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image15}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold ">Gym Excercises</h1>
                <p className="text-white font-bold">
                  React.Js and Tailwind CSS
                </p>
                <a
                  href="https://github.com/carren-chepkorir/gym-exercises-.git"
                  className="href"
                >
                  {" "}
                  <button className="btn bg-orange-500   text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image16}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold ">My Portfolio</h1>
                <p className="text-white font-bold">
                  React.Js and Tailwind CSS
                </p>
                <a
                  href="https://github.com/carren-chepkorir/Carren-Chepkorir-Portfolio-.git"
                  className="href"
                >
                  <button className="btn bg-orange-500   text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-row container ml-[200px] space-x-10 mt-5">
            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image17}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold "> Adanian IOT Website</h1>
                <p className="text-white font-bold">
                  React.Js and Tailwind CSS
                </p>
                <a
                  href="https://github.com/carren-chepkorir/adanian-iot-website-using-react-js.git"
                  className="href"
                >
                  <button className="btn bg-orange-500   text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="h-[400px] w-[600px] transition duration-500 hover:opacity-50"
                src={Image18}
                alt="Image"
              />
              <div className="absolute text-2xl flex-col top-0 left-0 h-full w-full bg-orange-200 opacity-0 hover:opacity-100 flex justify-center items-center">
                <h1 className="text-white font-bold ">E-commerce </h1>
                <p className="text-white font-bold">ASP.NET</p>

                <a
                  href="https://github.com/carren-chepkorir/LadyLuxe-.git"
                  className="href"
                >
                  <button className="btn bg-orange-500 text-white py-4 px-6 rounded-lg text-center text-xl">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <a href="https://github.com/carren-chepkorir" className="href">
          {" "}
          <button className="bg-orange-500 rounded-full items-center text-white py-5 px-6 ">
            See All My Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
