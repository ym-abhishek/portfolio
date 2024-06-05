import "./home.css";
import dp from "../images/com.png";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <div className="intro">
          <p>--- Hello</p>
          <h1>I'm Y M Abhishek</h1>
          <p>
            This is Abhishek, a Python Full Stack Fresher located in India,
            Karnataka, Bengaluru, looking for fresher opportunities.
          </p>
          <button>Download CV</button>
          <button>About Me</button>
        </div>
        <div className="dp">
          <img src={dp} alt="dp" />
        </div>
      </div>
    </>
  );
}
