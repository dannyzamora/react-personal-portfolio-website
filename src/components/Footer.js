import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from '@mui/material/Link';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
        <Link href="https://www.linkedin.com/in/danny-zamora/" target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
        <Link href="mailto:dannyzamora.js@gmail.com" target="_blank" rel="noopener">
          <MailIcon />
        </Link>
        <Link href="https://github.com/dannyzamora" target="_blank" rel="noopener">
          <GithubIcon />
        </Link>
       
      </div>
      <p> &copy; 2022 dannysview.com</p>
    </div>
  );
}

export default Footer;
