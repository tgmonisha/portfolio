import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="hero-section">
        <div className="header-content">
          <div className="hero-text">
            <img src="images/profile.jpg" alt="Monisha TG - Software Developer" className="profile-img" />
            <h1>Monisha TG</h1>
            <p className="subtitle">Software Engineer | Full-Stack Developer</p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
              Recent B.Tech graduate passionate about creating innovative solutions with Java, React, and modern web technologies
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="images/Monisha_portfolio.pdf" download className="btn">
                📄 Download Resume
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn btn-secondary">
                💬 Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav-container">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
