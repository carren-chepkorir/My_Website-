import React from "react";
import Pic1 from "../assets/My Website assets/Image2.png";
import Pic11 from "../assets/My Website assets/Image3.png";
import Pic2 from "../assets/My Website assets/Image4.jpg";
import Pic3 from "../assets/My Website assets/Image 5.png";
import Pic4 from "../assets/My Website assets/Image6.png";
import Pic5 from "../assets/My Website assets/Image7.png";
import Pic6 from "../assets/My Website assets/Image8.png";
import Pic7 from "../assets/My Website assets/Image9.png";
import Pic8 from "../assets/My Website assets/Image10.png";
import Pic9 from "../assets/My Website assets/Image11.png";
import Pic10 from "../assets/My Website assets/Image12.png";

const AchievementsContent = () => {
  return (
    <div className=" bg-slate-100 h-[100vh] w-auto  mt-[100px]">
      <div className="flex flex-wrap justify-center items-center">
        <h1 className="font-bold text-4xl hover:text-orange-600 ">SKILLS</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        {" "}
        <h1 className="ld:text-2xl font-bold">What I can Do</h1>
      </div>
      <div className="flex flex-wrap flex-col justify-center items-center ">
        <div className=" flex flex-wrap flex-row container mt-5 space-x-10 justify-center ">
          <div className=" flex flex-col ld:transform  bg-white transition duration-500 hover:scale-125 hover:bg-white  justify-center items-center">
            <img className="h-[150px] w-[300px] rounded-lg" src={Pic11} />
            <p>HTML</p>
          </div>
          <div className=" flex flex-col transform  bg-white  transition duration-500 hover:scale-125  hover:bg-white  justify-center items-center">
            <img className="h-[150px] w-[300px]  rounded-lg" src={Pic1} />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col  transform  bg-white  transition duration-500 hover:scale-125  hover:bg-white   justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic2} />
            <p>CSS</p>
          </div>
          <div className="flex flex-col transform bg-white  transition duration-500 hover:scale-125 hover:bg-white justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic3} />
            <p>.NET</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row container mt-5 space-x-10 justify-center   ">
          <div
            className="  flex  flex-col transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white 
          justify-center items-center"
          >
            <img className="h-[150px] w-[300px] " src={Pic4} />
            <p>JavaScript</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic5} />
            <p>React.Js</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic6} />
            <p>Microsoft Sql Server</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic7} />
            <p>SQL</p>
          </div>
        </div>

        <div className="flex flex-wrap flex-row container mt-5 space-x-10  justify-center   ">
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[100px] w-[300px] " src={Pic8} />
            <p>Docker</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic9} />
            <p>Technical Writing</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic10} />
            <p>Git and Github Workflow</p>
          </div>
          <div className=" transform  bg-white  transition duration-500 hover:scale-125 hover:bg-white flex-col flex justify-center items-center">
            <img className="h-[150px] w-[300px] " src={Pic11} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsContent;
