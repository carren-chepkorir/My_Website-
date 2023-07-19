import React from "react";
import frontpic from "../assets/contact.webp";

const Contacts = () => {
  return (
    <div>
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
          <div>
            <img src={frontpic} />
          </div>
        </div>
        <div className="flex flex-wrap flex-1 mt-10">
          <p>Contact form</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
