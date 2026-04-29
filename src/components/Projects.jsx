import './Projects.css';

const PROJECTS = [
  {
    title: 'Portfolio CI/CD',
    description:
      'Este mismo sitio. Portfolio React desarrollado en equipo aplicando el flujo completo de DevOps moderno: ramas feature, pull requests con deploy previews y despliegue continuo en Netlify desde la rama main.',
    tags: ['React', 'Vite', 'Netlify', 'CI/CD', 'GitHub'],
    role: 'Equipo',
    year: '2026',
    featured: true,
    links: {
      github: 'https://github.com/MesaZapata/portfolio-cicd',
      live: 'https://portfoliocicd.netlify.app',
    },
  },
  {
    title: 'Sales Insights Dashboard',
    description:
      'Pipeline ETL en Python que procesa datos transaccionales y los presenta en un dashboard de Power BI con métricas de ingresos, rotación y comportamiento por región.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI'],
    role: 'Emmanuel',
    year: '2026',
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Customer Segmentation Tool',
    description:
      'Herramienta full-stack de clustering para segmentar clientes. Frontend en React, backend en Python con APIs REST y persistencia en PostgreSQL.',
    tags: ['React', 'Python', 'PostgreSQL', 'REST'],
    role: 'Equipo',
    year: '2025',
    links: {
      github: null,
      live: null,
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <header className="projects__header">
        <p className="projects__eyebrow">
          <span className="projects__eyebrow-dash" aria-hidden="true"></span>
          03 — Selected Work
        </p>
        <h2 className="projects__title">
          Lo que <em className="projects__display">construimos</em>.
        </h2>
        <p className="projects__intro">
          Una selección de proyectos donde combinamos desarrollo web y análisis
          de datos.
        </p>
      </header>

      <div className="projects__grid">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className={`projects__card ${
              project.featured ? 'projects__card--featured' : ''
            }`}
          >
            <header className="projects__card-head">
              <span className="projects__num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="projects__year">{project.year}</span>
            </header>

            <div className="projects__card-body">
              <span className="projects__role">{project.role}</span>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">
                {project.description}
              </p>
              <ul className="projects__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="projects__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {(project.links.github || project.links.live) && (
              <footer className="projects__card-footer">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="projects__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source ↗
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="projects__link projects__link--primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live ↗
                  </a>
                )}
              </footer>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
