import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';
import { profile } from '../data/portfolio';
import '../assets/styles/Main.scss';

function SocialIcons() {
  return (
    <>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><EmailIcon/></a>
    </>
  );
}

function Main({mode}: {mode: string}) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mode === 'dark' ? logoWhite : logoDark} alt="Danah Alsubaie logo" />
        </div>
        <div className="content">
          <div className="social_icons">
            <SocialIcons/>
          </div>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.title}</p>
          <p className="summary">{profile.summary}</p>

          <div className="mobile_social_icons">
            <SocialIcons/>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
              <DescriptionIcon/> View Resume
            </a>
            <a className="btn btn-outline" href="#projects">See Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
