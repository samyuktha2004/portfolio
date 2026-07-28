import React from 'react';
import { personalInfo, education, projects, achievements, aboutMe } from '../data/portfolioData';

export function PrintResume() {
  return (
    <div className="print-resume">
      {/* Header */}
      <div className="print-header">
        <h1>{personalInfo.name}</h1>
        <p className="print-title">{personalInfo.title}</p>
        <div className="print-contact">
          <a href={`mailto:${personalInfo.email}`} className="no-break">{personalInfo.email}</a>
          <span className="separator">|</span>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="no-break">{personalInfo.linkedin}</a>
          <span className="separator">|</span>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="no-break">{personalInfo.github}</a>
        </div>
      </div>

      {/* Summary */}
      <div className="print-section">
        <h2 className="print-section-heading">SUMMARY</h2>
        <p className="print-body">{personalInfo.summary}</p>
        <hr className="print-divider" />
      </div>

      {/* Education */}
      <div className="print-section">
        <h2 className="print-section-heading">EDUCATION</h2>
        <div className="print-subsection">
          <div className="print-row">
            <div className="print-col-left">
              <h3 className="print-subheading">{education.degree.title}</h3>
              <p className="print-meta">{education.degree.specialization}</p>
              <p className="print-meta">{education.degree.institution}</p>
            </div>
            <span className="print-date no-break">{education.degree.duration}</span>
          </div>
          <ul className="print-list">
            <li>CGPA: {education.degree.cgpa}</li>
            {education.degree.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
        <hr className="print-divider" />
      </div>

      {/* Leadership Experience */}
      <div className="print-section">
        <h2 className="print-section-heading">LEADERSHIP EXPERIENCE</h2>
        {education.leadership.map((position, i) => (
          <div key={i} className="print-subsection">
            <div className="print-row">
              <div className="print-col-left">
                <h3 className="print-subheading">{position.role}</h3>
                <p className="print-meta">{position.organization}</p>
              </div>
              <span className="print-date no-break">{position.duration}</span>
            </div>
            <ul className="print-list">
              {position.responsibilities.map((responsibility, j) => (
                <li key={j}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
        <hr className="print-divider" />
      </div>

      {/* Projects */}
      <div className="print-section">
        <h2 className="print-section-heading">FEATURED PROJECTS</h2>
        {projects.map((project, i) => (
          <div key={i} className="print-subsection">
            <h3 className="print-subheading">{project.title}</h3>
            <p className="print-meta">{project.technologies.join(' | ')}</p>
            <p className="print-body">{project.description}</p>
          </div>
        ))}
        <hr className="print-divider" />
      </div>

      {/* Achievements */}
      <div className="print-section">
        <h2 className="print-section-heading">ACHIEVEMENTS & AWARDS</h2>
        <ul className="print-list">
          {achievements.map((achievement, i) => (
            <li key={i}>
              <strong>{achievement.title.split(' - ')[0]}</strong> - {achievement.description}
            </li>
          ))}
        </ul>
        <hr className="print-divider" />
      </div>

      {/* Skills */}
      <div className="print-section print-section-last">
        <h2 className="print-section-heading">SKILLS & EXPERTISE</h2>
        <div className="print-skills-grid">
          {aboutMe.skills.map((skillGroup, i) => (
            <div key={i} className="print-skill-group">
              <h4 className="print-skill-category">{skillGroup.category}</h4>
              <p className="print-body">{skillGroup.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}