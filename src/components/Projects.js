import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "QuickBite - Food Delivery Platform",
      description: "A comprehensive full-stack web application for online food ordering with advanced features including role-based authentication, dynamic menu management, and responsive design.",
      technologies: ["Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "MySQL"],
      features: [
        "Role-based access control (Admin, Restaurant, Customer)",
        "Dynamic menu management system",
        "Responsive UI design",
        
      ],
      github: "https://github.com/tgmonisha/QuickBite",
      className: "quickbite"
    },
    {
      title: "HireHive - Job Portal System",
      description: "A modern MERN stack job portal connecting job seekers with employers, featuring comprehensive dashboards, real-time notifications, and advanced search capabilities.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Separate dashboards for job seekers and employers",
        "Advanced job search and filtering",
        "Application tracking system",
        "Profile management and resume upload"
      ],
      github: "https://github.com/tgmonisha/HireHive",
      className: "hirehive"
    }
  ];

  return (
    <>
      <section id="projects" className="container section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.className}`}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="more-projects" className="container section colored">
        <div className="section-header">
          <h2>Explore More</h2>
          <div className="section-divider"></div>
        </div>
        <div className="more-projects-grid">
          <div className="more-project-card project-github">
            <div className="github-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3>Visit My GitHub</h3>
            <p>Explore my complete portfolio of projects, contributions, and code repositories. See my development journey and coding practices.</p>
            <a href="https://github.com/tgmonisha" target="_blank" rel="noopener noreferrer" className="btn">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
