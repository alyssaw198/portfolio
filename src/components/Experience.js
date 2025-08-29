import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major client project',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      company: 'StartupHub Inc.',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed and maintained multiple web applications for startup clients. Worked closely with product managers and designers to deliver high-quality solutions.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Git'],
      achievements: [
        'Built 3 successful MVP applications for startup clients',
        'Improved codebase maintainability by 50%',
        'Reduced bug reports by 30% through better testing'
      ]
    },
    {
      id: 3,
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      location: 'San Francisco, CA',
      description: 'Specialized in creating responsive and accessible user interfaces. Collaborated with UX/UI designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Figma'],
      achievements: [
        'Improved website accessibility score to 95%',
        'Reduced bundle size by 25% through code optimization',
        'Implemented responsive design for 10+ client websites'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>My professional journey in software development</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="company-name">{experience.company}</h3>
                  <h4 className="position-title">{experience.position}</h4>
                  <div className="experience-meta">
                    <span className="duration">{experience.duration}</span>
                    <span className="location">{experience.location}</span>
                  </div>
                </div>
                
                <p className="experience-description">{experience.description}</p>
                
                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
