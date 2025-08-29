import React from 'react';

function About() {
  const skills = [
    'Java', 'Spring', 'Python', 'SQL', 'Git',
    'Bash', 'Jenkins', 'Kafka', 'React'
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
              Passionate Backend Software Developer focused on building scalable and reliable systems.
            </p>
            <p className="hero-description">

              With expereince in backend development, I specialize in maintaining and optimizing systems, designing and implementing new features, making sure they are all scalable and reliable. I'm always eager to improve my technical expertise and take on new engineering challenges!
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