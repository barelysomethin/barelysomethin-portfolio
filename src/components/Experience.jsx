import React from 'react'

const Experience = () => {
  return (
    <div className="content-page experience">
      <h1>Experience.</h1>
      <div className="experience-list projects-grid">
        <div className="experience-item project-item">
          <h3>Freelance Web Developer</h3>
          <p className="mono">India | Remote</p>
          <ul>
            <li>Designed and deployed a full-stack marketplace platform built with scalability in mind.</li>
            <li>Architected the system to support thousands of concurrent users with high availability.</li>
            <li>Managed the end-to-end lifecycle: design, development, cloud deployment, and maintenance.</li>
            <li>Tech Stack included Node.JS (TypeScript), React.js, Git and Vercel CI/CD.</li>
          </ul>
        </div>
        <div className="experience-item project-item">
          <h3>Open Source Contributions</h3>
          <ul>
            <li><strong>Neutralinojs:</strong> Improved frontend UX by refactoring UI components and fixing responsive design.</li>
            <li><strong>Dyalog APL:</strong> Contributing to the ewc-client project, enhancing web-client capabilities.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
