import React from "react";

const Techwrite = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-row ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold  ">Blog</h1>
          <p className="flex leading-loose">
            I love documenting my work and teaching other Developers. Here are
            some of my Articles have written on
            <a href="https://dev.to/carrenchepkorir/" className="href">
              <span className="text-blue-500 ml-2">Dev.io</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techwrite;
