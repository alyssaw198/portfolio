import React from 'react';

function About() {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 'SQL', 'Git',
    'TypeScript', 'Next.js', 'MongoDB', 'AWS', 'Docker', 'Figma'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Alyssa Wu</span>
            </h1>
            <p className="hero-subtitle">
              A passionate Full Stack Developer who loves creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <p className="hero-description">
              With a strong foundation in both frontend and backend development, 
              I specialize in building modern web applications that solve real-world problems. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
            
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                My Experience
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                My Projects
              </button>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;