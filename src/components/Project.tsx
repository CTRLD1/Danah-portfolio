import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CollectionsIcon from '@mui/icons-material/Collections';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects, Project as ProjectType } from '../data/portfolio';
import '../assets/styles/Project.scss';

function Project() {
    const [active, setActive] = useState<ProjectType | null>(null);
    const [index, setIndex] = useState<number>(0);

    const open = (project: ProjectType) => {
        setActive(project);
        setIndex(0);
    };

    const step = (delta: number) => {
        if (!active) return;
        const count = active.images.length;
        setIndex((index + delta + count) % count);
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project" key={project.title}>
                    <button className="thumb" onClick={() => open(project)} aria-label={`View ${project.title} screenshots`}>
                        <img src={project.images[0]} className="zoom" alt={`${project.title} screenshot`} width="100%"/>
                        {project.images.length > 1 && (
                            <span className="thumb-badge"><CollectionsIcon/> {project.images.length} screens</span>
                        )}
                    </button>
                    <span className="project-tag">{project.tag}</span>
                    <a href={project.links[0].url} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    <p>{project.description}</p>
                    <div className="flex-chips">
                        {project.stack.map((label) => (
                            <Chip key={label} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="project-links">
                        {project.links.map((link) => (
                            <a key={link.url} href={link.url} target="_blank" rel="noreferrer"><GitHubIcon/> {link.label}</a>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <Dialog open={active !== null} onClose={() => setActive(null)} maxWidth="lg" fullWidth className="gallery-dialog">
            {active && (
                <div
                    className="gallery"
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowLeft') step(-1);
                        if (e.key === 'ArrowRight') step(1);
                    }}
                >
                    <div className="gallery-header">
                        <h3>{active.title} <span>{index + 1} / {active.images.length}</span></h3>
                        <IconButton aria-label="close" onClick={() => setActive(null)}><CloseIcon/></IconButton>
                    </div>
                    <div className="gallery-body">
                        {active.images.length > 1 && (
                            <IconButton className="gallery-nav prev" aria-label="previous" onClick={() => step(-1)}><ChevronLeftIcon/></IconButton>
                        )}
                        <img src={active.images[index]} alt={`${active.title} screenshot ${index + 1}`}/>
                        {active.images.length > 1 && (
                            <IconButton className="gallery-nav next" aria-label="next" onClick={() => step(1)}><ChevronRightIcon/></IconButton>
                        )}
                    </div>
                </div>
            )}
        </Dialog>
    </div>
    );
}

export default Project;
