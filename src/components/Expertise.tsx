import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { expertise } from '../data/portfolio';
import '../assets/styles/Expertise.scss';

const icons = { react: faReact, python: faPython, git: faGitAlt };

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {expertise.map((item) => (
                    <div className="skill" key={item.title}>
                        <FontAwesomeIcon icon={icons[item.icon]} size="3x"/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {item.stack.map((label) => (
                                <Chip key={label} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
