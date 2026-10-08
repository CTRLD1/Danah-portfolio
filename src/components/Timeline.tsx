import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@mui/material/Chip';
import { experience } from '../data/portfolio';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          {experience.map((item, i) => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              contentStyle={i === 0 ? { background: '#0E0EEA', color: '#FFFFFF' } : undefined}
              contentArrowStyle={i === 0 ? { borderRight: '7px solid #0E0EEA' } : undefined}
              date={item.date}
              iconClassName={item.logo ? 'timeline-logo-icon' : undefined}
              iconStyle={{ background: item.logo ? '#FFFFFF' : '#0E0EEA', color: '#FFFFFF' }}
              icon={item.logo
                ? <img src={item.logo} alt={item.org} />
                : <FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.org}</h4>
              {item.meta && <p className="timeline-meta">{item.meta}</p>}
              <p>{item.description}</p>
              {item.highlights?.map((group) => (
                <div className="timeline-highlight" key={group.heading}>
                  <h5>{group.heading}</h5>
                  <ul>
                    {group.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
              {item.skills && (
                <div className="flex-chips timeline-skills">
                  {item.skills.map((skill) => <Chip key={skill} className="chip" label={skill} />)}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
