import React from "react";
import { education } from '../data/portfolio';
import '../assets/styles/Education.scss';

function Education() {
    return (
    <div className="education-container" id="education">
        <h1>Education</h1>
        <div className="education-grid">
            {education.map((item) => (
                <div className="education-card" key={item.title}>
                    <div className="education-logos">
                        {item.logos.map((logo) => (
                            <img key={logo.alt} src={logo.src} alt={logo.alt} title={logo.alt} />
                        ))}
                    </div>
                    <div className="education-body">
                        <span className="education-date">{item.date}</span>
                        <h3>{item.title}</h3>
                        <p className="education-org">{item.org}</p>
                        {item.highlight && <span className="education-highlight">{item.highlight}</span>}
                        <p className="education-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Education;
