import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="container section">
      <div className="section-header">
        <h2>Education & Journey</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">2021 - June 2025</div>
            <h3>B.Tech in Computer Science Engineering</h3>
            <h4>RGUKT RK Valley</h4>
            <p>Recently graduated with comprehensive knowledge in computer science fundamentals including 
            data structures, algorithms, software engineering, and modern web development. Achieved strong 
            academic foundation with hands-on project experience.</p>
            <div className="timeline-skills">
              <span className="skill-tag">Core Java</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">2023 - 2025</div>
            <h3>Academic Projects & Learning</h3>
            <h4>Full-Stack Development</h4>
            <p>Developed multiple full-stack applications as part of coursework and self-learning. 
            Built real-world projects including food delivery platform and job portal using modern 
            technologies like React, Spring Boot, and MERN stack.</p>
            <div className="timeline-skills">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker current"></div>
          <div className="timeline-content">
            <div className="timeline-date">June 2025 - Present</div>
            <h3>Ready for Professional Journey</h3>
            <h4>Seeking Entry-Level Opportunities</h4>
            <p>Fresh graduate eager to start my professional career as a Java Developer or Full-Stack Developer. 
            Ready to contribute fresh perspectives, learn from experienced teams, and grow within a dynamic 
            organization while applying my technical skills to real-world challenges.</p>
            <div className="timeline-skills">
              <span className="skill-tag">Fresh Graduate</span>
              <span className="skill-tag">Quick Learner</span>
              <span className="skill-tag">Team Player</span>
              <span className="skill-tag">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
