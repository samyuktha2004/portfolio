import React from 'react';
import { personalInfo, education, projects, achievements, aboutMe } from '../data/portfolioData';

export function Resume() {
  return (
    <div className="bg-white text-black p-6 max-w-[8.5in] mx-auto">
      {/* Header */}
      <div className="text-center mb-4 pb-3 border-b-2 border-gray-300">
        <h1 className="resume-name mb-1">{personalInfo.name}</h1>
        <p className="resume-title mb-2">{personalInfo.title}</p>
        <div className="resume-contact">
          <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
          <span className="mx-2">|</span>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personalInfo.linkedin}</a>
          <span className="mx-2">|</span>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personalInfo.github}</a>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <h2 className="resume-section-heading">SUMMARY</h2>
        <p className="resume-body">
          {personalInfo.summary}
        </p>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="resume-section-heading">EDUCATION</h2>
        <div className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="resume-subheading">{education.degree.title}</h3>
              <p className="resume-meta">{education.degree.specialization}</p>
              <p className="resume-meta">{education.degree.institution}</p>
            </div>
            <span className="resume-meta whitespace-nowrap">{education.degree.duration}</span>
          </div>
          <ul className="list-disc list-inside resume-body mt-1 ml-2">
            <li>CGPA: {education.degree.cgpa}</li>
            {education.degree.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Leadership Experience */}
      <div className="mb-4">
        <h2 className="resume-section-heading">LEADERSHIP EXPERIENCE</h2>
        
        {education.leadership.map((position, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <h3 className="resume-subheading">{position.role}</h3>
                <p className="resume-meta">{position.organization}</p>
              </div>
              <span className="resume-meta whitespace-nowrap ml-4">{position.duration}</span>
            </div>
            <ul className="list-disc list-inside resume-body mt-1 ml-2">
              {position.responsibilities.map((responsibility, j) => (
                <li key={j}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="resume-section-heading">FEATURED PROJECTS</h2>
        
        {projects.map((project, i) => (
          <div key={i} className="mb-2">
            <h3 className="resume-subheading">{project.title}</h3>
            <p className="resume-meta">{project.technologies.join(' | ')}</p>
            <p className="resume-body mt-1">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <h2 className="resume-section-heading">ACHIEVEMENTS & AWARDS</h2>
        <ul className="list-disc list-inside resume-body ml-2">
          {achievements.map((achievement, i) => (
            <li key={i}>
              <strong>{achievement.title.split(' - ')[0]}</strong> - {achievement.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="resume-section-heading">SKILLS & EXPERTISE</h2>
        <div className="grid grid-cols-2 gap-3">
          {aboutMe.skills.map((skillGroup, i) => (
            <div key={i}>
              <h3 className="resume-subheading-small mb-0.5">{skillGroup.category}</h3>
              <p className="resume-body">{skillGroup.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}