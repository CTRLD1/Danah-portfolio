import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { profile } from '../data/portfolio';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><EmailIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} {profile.name}. Template by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a>.</p>
    </footer>
  );
}

export default Footer;
