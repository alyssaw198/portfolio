import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Morgan Stanley',
      position: 'Software Developer',
      duration: 'Febuary 2025 - Present',
      location: 'Montreal, Quebec',
      description: 'Development and maintenance of trade settlement tool using Java and Spring to support high-volume trade processing, handling thousands of transactions daily.',
      technologies: ['Java', 'Spring', 'SQL', 'Kafka', 'Jenkins'],
      achievements: [
        'Ensure code reliability and quality by writing comprehensive unit and integration tests, with thorough validation across all environments',
        'Support and optimize Jenkins pipelines to streamline application build process',
        'Implemented automated library updates, doubling dependency freshness and enhancing application resiliency and stability',
        'Refactored and optimized Kafka data flows to efficiently process 10,000+ messages per day'
      ]
    },
    {
      id: 2,
      company: 'Morgan Stanley',
      position: 'Software Developer Intern',
      duration: 'May 2024 - August 2024',
      location: 'Montreal, Quebec',
      description: 'Development of internal software to improve system performance and enhance database compatibility.',
      technologies: ['Java', 'Spring', 'SQL', 'MyBatis', 'H2 Database'],
      achievements: [
        'Migrated internal software from a traditional database to an in-memory H2 database, permitting concurrent testing and eliminating latencies up to 1 hour per pull request within the software development life cycle',
        'Implemented MyBatis in place of JDBC to leverage native SQL, enabling compatibility across multiple databases',
        'Implemented automated unit and integration test cases using JUnit and Mockito tests',
        'Selected to present internship project to full-time employees and executives at company-wide technology exhibition'
      ]
    },
    {
      id: 3,
      company: 'Communications Security Establishment',
      position: 'Software Developer Intern',
      duration: 'September 2023 - December 2023',
      location: 'Ottawa, Ontario',
      description: 'Development of internal ETL framework for data ingestion using Python.',
      technologies: ['Python', 'Prometheus', 'Elastic Stack'],
      achievements: [
        'Optimized the runtime of an organization-wide file verification tool by 92% through implementing multithreading',
        'Integrated Prometheus into an internal ETL framework, enabling metric collection and visualization for data ingestors',
        'Created comprehensive dashboards to monitor and maintain data ingestors via the ELK stack to ensure optimal performance and accurate alert generation',
        'Implemented dataframe sampling for organization-wide ingested data, reducing staging storage needs by 90%'
      ]
    },
    {
      id: 4,
      company: 'Aviva Insurance',
      position: 'Data Intern',
      duration: 'June 2023 - August 2023',
      location: 'Toronto, Ontario',
      description: 'Data analysis and quality assurance of claims data.',
      technologies: ['SQL', 'SAS', 'Python', 'Plotly', 'Matplotlib'],
      achievements: [
        'Performed data quality assurance and data analysis using SQL, SAS and Python on 1,000,000+ documents to determine operational insights for insurance use cases',
        'Developed comprehensive unit tests in Python using PyTest that consistently achieved 90%+ of code coverage',
        'Utilized Plotly and Matplotlib for data visualization in organizing presentations for data science and business teams'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>My professional journey in technology</p>
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
                  <h5>Contributions:</h5>
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
