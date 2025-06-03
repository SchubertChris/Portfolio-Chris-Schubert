// ===========================
// WORK SECTION COMPONENT
// ===========================

import React, { useState } from 'react';
import './LandingPage-WorkSection.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  link?: string;
  github?: string;
}

const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Moderne Shopping-Plattform mit React, TypeScript und Node.js entwickelt.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      category: 'web',
      image: 'https://via.placeholder.com/400x300',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Kollaborative Projektmanagement-Lösung mit Echtzeit-Updates.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      category: 'app',
      image: 'https://via.placeholder.com/400x300',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Kreative Portfolio-Seite für einen Fotografen mit beeindruckenden Animationen.',
      tags: ['React', 'GSAP', 'Three.js'],
      category: 'design',
      image: 'https://via.placeholder.com/400x300',
      link: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interaktives Wetter-Dashboard mit Datenvisualisierung.',
      tags: ['React', 'D3.js', 'Weather API'],
      category: 'web',
      image: 'https://via.placeholder.com/400x300',
      github: '#',
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Sichere und benutzerfreundliche Banking-App für iOS und Android.',
      tags: ['React Native', 'TypeScript', 'Node.js'],
      category: 'app',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 6,
      title: 'Brand Identity',
      description: 'Komplettes Branding-Paket für ein Tech-Startup.',
      tags: ['UI/UX', 'Figma', 'Branding'],
      category: 'design',
      image: 'https://via.placeholder.com/400x300',
    },
  ];

  const filters = [
    { value: 'all', label: 'Alle' },
    { value: 'web', label: 'Web' },
    { value: 'app', label: 'Apps' },
    { value: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="work__header reveal">
          <h2 className="work__title">Meine Arbeiten</h2>
          <p className="work__subtitle">
            Eine Auswahl meiner besten Projekte
          </p>
        </div>

        {/* Filter */}
        <div className="work__filters reveal">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`work__filter ${activeFilter === filter.value ? 'work__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="work__grid">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className="work__project reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="work__project-image">
                <img src={project.image} alt={project.title} />
                <div className="work__project-overlay">
                  <div className="work__project-links">
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="work__project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="work__project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="work__project-content">
                <h3 className="work__project-title">{project.title}</h3>
                <p className="work__project-description">{project.description}</p>
                <div className="work__project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="work__project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;