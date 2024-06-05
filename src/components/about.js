import React from "react";
import "./about.css";
import displaypicture from "../images/DP.png";
import HTML from "../images/HTML5-logo.png";
import CSS from "../images/CSS3-logo.png";
import JS from "../images/JavaScript-logo.png";
import Bootstrap from "../images/Bootstrap-logo.png";
import Reactjs from "../images/React_logo.png";
import Python from "../images/Python-logo.png";
import Django from "../images/Django-Logo.png";
import Flask from "../images/flask.png";
import MySQL from "../images/mysql.png";

export default function About() {
  return (
    <>
      <div className=".wrapper-about">
        <div className="container-about">
          <div className="main-about">
            <h1>
              About Me
              <hr />
            </h1>
            <p>
              Hello, I am <span>Y M Abhishek</span>, a BE Mining Engineering
              graduate from Acharya Institute of Technology under VTU
              University, having completed my studies in 2021. Despite my
              background in mining engineering, I have always had a strong
              passion for computer technology, which motivated me to learn
              coding and specialize in Python full stack development. I have
              dedicated significant time and effort to mastering both frontend
              and backend development. Now, I am actively seeking fresher
              opportunities where I can apply my skills and knowledge in
              frontend, backend, or Python full stack development to contribute
              to innovative projects and grow within the tech industry.
            </p>
            <p>
              Furthermore, I find enjoyment in a variety of hobbies including
              reading books, playing computer games, listening to music, and
              watching movies. Additionally, I have a passion for photography. I
              also have a keen interest in history TV shows such as "Food
              Factory" and "Pawn Stars." In addition, I regularly follow YouTube
              channels like David Bombal and NetworkChuck, which further enrich
              my interests and knowledge in networking and technology. Alongside
              these interests, I also indulge in watching culinary competitions
              like "MasterChef," which adds another layer of enjoyment to my
              leisure time.
            </p>
          </div>
          <div className="Display-Picture">
            <img src={displaypicture} alt="dp" />
          </div>
        </div>
        <div className="skills-section">
          <h2>Skills</h2>
          <hr />
          <div className="my-skills-grid">
            <div className="grid-item">
              <img src={HTML} alt="html-logo" />
              <p>
                My HTML skills allow me to structure web content using tags and
                elements like headings, paragraphs, links, images, lists,
                tables, and forms. I can create well-structured, user-friendly
                websites by using semantic tags and ensuring accessibility and
                SEO optimization.
              </p>
            </div>
            <div className="grid-item">
              <img src={CSS} alt="css-logo" />
              <p>
                My CSS skills enable me to style web content, control layouts,
                and create visually appealing, responsive websites. I use
                techniques like Flexbox, Grid, and animations to enhance user
                experience.
              </p>
            </div>
            <div className="grid-item">
              <img src={JS} alt="js-logo" />
              <p>
                My JavaScript skills allow me to create dynamic and interactive
                web experiences. I can manipulate the DOM, handle events, and
                use APIs to fetch data. Additionally, I am proficient in using
                frameworks and libraries like React to streamline development
                and enhance functionality.
              </p>
            </div>
            <div className="grid-item">
              <img src={Bootstrap} alt="bootstrap-logo" />
              <p>
                My Bootstrap skills enable me to quickly build responsive,
                mobile-first websites using its pre-designed components and grid
                system. I can efficiently implement layout structures,
                navigation, forms, and modals, ensuring a consistent and
                professional appearance across all devices.
              </p>
            </div>
            <div className="grid-item">
              <img src={Reactjs} alt="react-logo" />
              <p>
                My React skills enable me to build dynamic, efficient, and
                scalable web applications. I can create reusable components,
                manage state with hooks, and use React Router for navigation.
                Additionally, I'm proficient in integrating APIs and optimizing
                performance for a seamless user experience.
              </p>
            </div>
            <div className="grid-item">
              <img src={Python} alt="python-logo" />
              <p>
                My Python skills enable me to write efficient and versatile code
                for various applications. I can perform tasks such as web
                development, data analysis, automation, database management, and
                machine learning without relying on frameworks.
              </p>
            </div>
            <div className="grid-item">
              <img src={Django} alt="django-logo" />
              <p>
                In Django, I have skills to develop robust web applications
                using Python. I can create efficient backend systems, handle
                user authentication, manage databases, and implement RESTful
                APIs. Additionally, I can utilize Django's built-in features for
                rapid development and scalability.
              </p>
            </div>
            <div className="grid-item">
              <img src={Flask} alt="flask-logo" />
              <p>
                In Flask, I have skills to develop web applications using
                Python. I can create efficient backend systems, handle routing,
                manage databases, and implement RESTful APIs. Additionally, I
                can utilize Flask's simplicity and flexibility for rapid
                development and scalability.
              </p>
            </div>
            <div className="grid-item">
              <img src={MySQL} alt="mysql-logo" />
              <p>
                In MySQL, I have skills to design and manage relational
                databases efficiently. I can create, query, and modify databases
                and tables, optimize database performance, and ensure data
                integrity. Additionally, I can work with advanced features like
                transactions, indexing, and stored procedures to handle complex
                data operations effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
