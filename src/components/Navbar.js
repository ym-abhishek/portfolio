import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">Portfolio Website</div>
        <div className="nav-box">
          <ul>
            <li><Link className="nav-links" to="/Home">Home</Link></li>
            <li><Link className="nav-links" to="/about">About</Link></li>
            <li><Link className="nav-links" to="/resume">Resume</Link></li>
            <li><Link className="nav-links" to="/projects">Project</Link></li>
            <li><Link className="nav-links" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
