import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-6 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img className="h-50 w-50 rounded-full" src={logo} alt="Logo" />
        </div>
        <div
          className={`md:flex ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0`}
        >
          <ul className=" md:space-x-12 md:flex md:flex-row  md:text-2xl">
            <li>
              <Link className="hover:text-red-700 text-black block" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-700 text-black block" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-700 text-black block" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-black block"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-black block"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-black block"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="menu-icon md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="bar w-6 h-1 bg-black my-1"></div>
          <div className="bar w-6 h-1 bg-black my-1"></div>
          <div className="bar w-6 h-1 bg-black my-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
