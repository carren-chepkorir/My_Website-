import React from "react";
import frontpic from "../assets/contact.webp";
import { FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap flex-row p-10 space-x-10">
        <div className="flex flex-1 flex-wrap flex-row">
          <div className="flex flex-wrap flex-col">
            {" "}
            <h1 className="text-2xl font-bold">GET IN TOUCH WITH ME</h1>
            <p className="leading-loose">
              I’m eager to hear about potential career opportunities and I would
              be pleased to chat about job openings and meet other software
              engineers in the Tech Sphere.Feel free to connect!
            </p>
          </div>

          <div className="flex flex-wrap flex-col box-border">
            <div className="flex-row">
              <img className="h-[300px] w-[500px] rounded-lg" src={frontpic} />
            </div>
            <div className="flex-row leading-loose">
              <p className="text-black font-semibold text-2xl">
                Carren Chepkorir
              </p>
              <p className="text-gray-500">Full Stack Developer</p>
              <p>I am available for full time position</p>
              <p>CONNECT WITH ME</p>
              <div className="flex flex-wrap flex-row space-x-8 mt-5 ">
                <a href="https://github.com/carren-chepkorir" className="href">
                  <FaGithub size={50} color="gray" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carren-chepkorir-24a4ba220/"
                  className="href"
                >
                  <FaLinkedin size={50} color="gray" />
                </a>
                <a href="https://twitter.com/CarrenChepkori4" className="href">
                  <FaTwitter size={50} color="gray" />
                </a>
                <a href="tel:+254742295861" className="href">
                  <FaPhone size={50} color="gray" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-1 mt-10">
          <form className="bg-gray-200 w-[600px]h-auto leading-loose rounded-lg p-3">
            <div className="flex flex-row flex-wrap">
              <div className=" flex flex-col ">
                <label htmlFor="name">Name:</label>
                <input
                  className=" px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  value={FormData.name}
                  required
                />
              </div>

              <div className=" flex flex-col ml-8">
                <label htmlFor="phonenumber">Phone Number:</label>
                <input
                  className=" px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  value={FormData.phonenumber}
                  required
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                className=" ml-3 px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                type="text"
                id="email"
                name="email"
                value={FormData.email}
                required
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label htmlFor="subject">Subject:</label>
              <input
                className="ml-3 px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                type="text"
                id="subject"
                name="subject"
                value={FormData.subject}
                required
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="message">Message:</label>
              <input
                className=" ml-3 px-10 py-20 rounded-lg border focus:outline-none focus:border-blue-500"
                type="text"
                id="message"
                name="message"
                value={FormData.message}
                required
              />
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="text-center bg-gray-400 text-white px-8 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
