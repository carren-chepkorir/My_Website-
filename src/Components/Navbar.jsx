import React from "react";
import Image1 from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap space-x-12 items-center pl-10 pr-10 ">
      <div className="flex flex-1">
        <img className="rounded-full w-[30px]h-[30px] " src={Image1} />
      </div>
      <nav className="flex-1 flex-wrap">
        <ul className="flex justify-between flex-wrap">
          <li className="hover:text-orange-700 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-700 text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-700 text-xl">
            <Link to="/blog">Blog</Link>
          </li>

          <li className="hover:text-orange-700 text-xl">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-orange-700 text-xl">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-orange-700 text-xl ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
