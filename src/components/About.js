import React from 'react';

const About = () => {
  return (
    <section id="about" className="container section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <div className="intro-card">
            <h3>Hello, I'm Monisha TG</h3>
            <p className="lead-text">
              A passionate Full-Stack Developer and recent B.Tech graduate in Computer Science from RGUKT RK Valley, 
              with expertise in modern web technologies and a strong foundation in software engineering principles.
            </p>
          </div>
          
          <div className="about-details">
            <div className="detail-item">
              <h4>🎓 Education</h4>
              <p>B.Tech in Computer Science Engineering<br/>RGUKT RK Valley (Graduated: June 2025)</p>
            </div>
            
            <div className="detail-item">
              <h4>💼 Career Focus</h4>
              <p>Fresh graduate seeking entry-level opportunities as a Java Developer or Full-Stack Developer 
              to apply my academic knowledge and project experience in real-world applications.</p>
            </div>
            
            <div className="detail-item">
              <h4>🚀 Passion</h4>
              <p>Eager to learn from experienced professionals, contribute fresh perspectives, and grow 
              within a collaborative team environment while building innovative software solutions.</p>
            </div>
          </div>
        </div>
        
        </div>
    </section>
  );
};

export default About;
