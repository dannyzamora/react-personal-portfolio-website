import React from "react";
import Link from '@mui/material/Link';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, It's Danny ✌</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href="https://www.linkedin.com/in/danny-zamora/" target="_blank" rel="noopener">
            <LinkedInIcon />
          </Link> 
          <Link href="mailto:dannyzamora.js@gmail.com" target="_blank" rel="noopener">
            <EmailIcon />
          </Link>
          <Link href="https://github.com/dannyzamora" target="_blank" rel="noopener">
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div id ='skills' className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, Gatsby, HTML, CSS, NPM, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
            Java Spring, NodeJS, ExpressJS, GraphQL, SQL, MongoDB, Firebase, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
