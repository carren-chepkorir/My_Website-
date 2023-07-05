import React from "react";
import ReactDOM from "react-dom/client";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blog from "./Pages/Blog";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { render } from "react-dom";
import Projects from "./Pages/Projects";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
