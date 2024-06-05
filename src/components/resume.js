import "../components/resume.css";

export default function Resume() {
  return (
    <div className="res-wrapper">
      <div className="res-header">
        <h1>Y M Abhishek</h1>
        <hr />
        <p>ymabhi14@outlook.com | 9164458168</p>
        <p>
          www.linkedin.com/in/ymabhishek | github.com/ym-abhishek/ | Bengaluru,
          Karnataka
        </p>
      </div>
      <div className="res-container">
        <div className="res-left">
          <h2>TECHNICAL SKILLS</h2>
          <hr />
          <h3>Frontend Development</h3>
          <p>
            <span>HTML/CSS:</span> Proficiency in creating and styling web pages
            using HTML for structure and CSS for presentation.
          </p>
          <p>
            <span>JavaScript:</span> Fundamental understanding of JavaScript for
            creating interactive and dynamic user interfaces. Familiarity with
            DOM manipulation is crucial.
          </p>
          <p>
            <span>Frameworks:</span> Basic knowledge of front-end frameworks
            such as Bootstrap, Materialize, or similar for rapid development and
            consistent UI design.
          </p>
          <h3>Back-End Development</h3>
          <p>
            <span>Python:</span> Strong understanding of Python programming
            language, including its syntax, data structures, OOPs, Exceptions,
            Regular Expressions, and basic algorithms.
          </p>
          <p>
            <span>Web Frameworks:</span> Familiarity with a Python web framework
            like Django or Flask for building scalable and maintainable back-end
            applications.
          </p>
          <h3>Database Basics</h3>
          <p>
            Understanding of basic database concepts, including CRUD operations,
            and familiarity with database like MySQL.
          </p>
          <h2>Projects</h2>
          <hr />
          <h3>Login page and Registration form using HTML5 and CSS3:</h3>
          <p>Provides a pure and clean UI for user interface.</p>
          <h3>Portfolio Website Using React:</h3>
          <p>
            I developed a comprehensive portfolio website using React, designed
            to showcase my work and skills effectively. The website features a
            highly responsive user interface, ensuring optimal performance
            across various devices and screen sizes. Smooth routing enhances the
            user experience, allowing seamless navigation between different
            sections of the site.
          </p>
          <h3>E-commerce using React:</h3>
          <p>
            I created an e-commerce app named "Elite Cart" using React,
            featuring a sleek and responsive UI. The app includes a product
            listing page and a detailed product view, with data fetched from an
            API. Users can browse products and view detailed information such as
            price and ratings. The application is designed for easy navigation
            and scalability.
          </p>
        </div>
        <div className="res-right">
          <h2>PROFESSIONAL SUMMARY</h2><hr/>
          <p>
            Mining Engineering graduate with strong analytical skills,
            transitioning to IT. Seeking an entry-level position to leverage
            Python full-stack proficiency in a dynamic environment, contributing
            to team success.
          </p>
          <h2>EDUCATION</h2><hr/>
          <table>
            <tr>
              <th>Education details</th>
              <th className="year">Year of Passsing</th>
            </tr>
            <tr>
              <td>
                BE - Mining Engineering
                <br />
                Acharya Institute of Technology
                <br />
                (VTU), Bengaluru
                <br />
                CGPA: 7.00
              </td>
              <td className="year">2018 - 2021</td>
            </tr>
            <tr>
              <td>
                Diploma in Mining
                <br />
                T.M.A.E.S Polytechnic, Hosapete
                <br />
                Percentage: 66.40%
                <br />
              </td>
              <td className="year">2015 - 2018</td>
            </tr>
            <tr>
              <td>
                SSLC
                <br />
                National High School, Hosapete
                <br />
                Percentage: 73.41%
                <br />
              </td>
              <td className="year">2014 - 2015</td>
            </tr>
          </table>
          <h2>KEY STRENGTHS</h2><hr/>
          <ul>
            <li>Capacity to quickly grasp new concepts and technologies.</li>
            <li>
              Adaptability to apply problem-solving skills to new IT challenges.
            </li>
            <li>Ability to collaborate and work well within diverse teams.</li>
            <li>
              Demonstrated ability to learn independently through self-directed
              study or training.
            </li>
          </ul>
          <h2>COURSES & CERTIFICATION</h2><hr/>
          <ul>
            <li>
              Python Full Stack Developer Course - Besant Technologies,
              Rajajinagar Bengaluru
            </li>
            <li>Excel Essentials, Udemy</li>
          </ul>
          <h2>LANGUAGES</h2><hr/>
          <ul>
            <li>English</li>
            <li>Kannada</li>
            <li>Hindi</li>
            <li>Telugu</li>
            <li>Tamil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
