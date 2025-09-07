import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Programming Languages",
      skills: [
        { name: "Java", level: "Advanced", progress: 90 },
        { name: "JavaScript", level: "Intermediate", progress: 70 },
        { name: "Python", level: "Intermediate", progress: 65 },
        { name: "SQL", level: "Intermediate", progress: 65 }
      ]
    },
    {
      title: "🌐 Web Technologies",
      skills: [
        { name: "HTML5", level: "Advanced", progress: 95 },
        { name: "CSS3", level: "Advanced", progress: 90 },
        { name: "React.js", level: "Intermediate", progress: 68 },
        { name: "Spring Framework", level: "Intermediate", progress: 68 }
      ]
    },
    {
      title: "🛠️ Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: "Intermediate", progress: 70 },
        { name: "MongoDB", level: "Basic", progress: 45 },
        { name: "Node.js", level: "Basic", progress: 50 },
        { name: "VS Code", level: "Advanced", progress: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="container section">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="skills-grid">
        <div className="skill-card skill-html">
          <img src="images/html.png" alt="HTML" />
          <p>HTML5</p>
        </div>
        <div className="skill-card skill-css">
          <img src="images/css.png" alt="CSS" />
          <p>CSS3</p>
        </div>
        <div className="skill-card skill-js">
          <img src="images/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card skill-java">
          <img src="images/java.png" alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-card skill-python">
          <img src="images/python.png" alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-card skill-react">
          <img src="images/react.png" alt="React" />
          <p>React.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
