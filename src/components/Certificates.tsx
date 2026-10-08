import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { certificates } from '../data/portfolio';
import '../assets/styles/Certificates.scss';

function Certificates() {
    return (
    <div className="certificates-container" id="certificates">
        <h1>Certificates &amp; Milestones</h1>
        <div className="certificates-grid">
            {certificates.map((cert) => {
                const media = cert.image
                    ? <img src={cert.image} alt={cert.title} loading="lazy"/>
                    : <div className="cert-placeholder"><FontAwesomeIcon icon={faAward} size="3x"/></div>;
                return (
                    <div className="certificate" key={cert.title}>
                        {cert.url
                            ? <a className="cert-media" href={cert.url} target="_blank" rel="noreferrer">{media}</a>
                            : <div className="cert-media">{media}</div>}
                        <div className="cert-body">
                            <h3>{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            {cert.url && (
                                <a className="cert-link" href={cert.url} target="_blank" rel="noreferrer">
                                    View certificate <OpenInNewIcon/>
                                </a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Certificates;
