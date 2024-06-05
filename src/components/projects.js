import "./project.css";
import React from "react";
import project_num from "../images/number guess.png";
import pro_login from "../images/reg.jpg";
import pro_port from "../images/portfolio.jpg";
import pro_pw from "../images/password manager.png";
import pro_cipher from "../images/cipher.jpg";
import cool_music from "../images/music.jpg";
import glshoes from "../images/shoes.jpg";

export default function MyProjects() {
  return (
    <>
      <div className="project-con">
        <h1>My Projects</h1>
        <div className="project-block">
          <div className="my-projects">
            <a
              href="https://ym-abhishek.github.io/Login-and-Registration-page/Login%20page.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro_port} alt="portfolio" />
              <h3>Portfolio Webpage</h3>
            </a>
          </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Login-and-Registration-page/Login%20page.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_login} alt="portfolio" />
                <h3>Login and Registration Page</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Password-Generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_pw} alt="portfolio" />
                <h3>Password Manager</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Login-and-Registration-page/Login%20page.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro_cipher} alt="portfolio" />
                <h3>Caesar Cipher</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Login-and-Registration-page/Login%20page.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project_num} alt="number guessing game" />
                <h3>Number Guessing Game</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://github.com/ym-abhishek/Cool-Music-Player.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cool_music} alt="portfolio" />
                <h3>Cool Music Player</h3>
              </a>
            </div>
            <div className="my-projects">
              <a
                href="https://ym-abhishek.github.io/Elite-Soles/GLSports.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={glshoes} alt="GLSports" />
                <h3>GLSports</h3>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
