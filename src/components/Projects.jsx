import './Projects.css';

const PROJECTS = [
  {
    title: 'Portfolio CI/CD',
    description:
      'Este mismo sitio. Portfolio React desarrollado en equipo aplicando el flujo completo de DevOps moderno: ramas feature, pull requests con deploy previews y despliegue continuo en Netlify desde la rama main.',
    tags: ['React', 'Vite', 'Netlify', 'CI/CD', 'GitHub'],
    role: 'Equipo',
    links: {
      github: 'https://github.com/MesaZapata/portfolio-cicd',
      live: 'https://portfoliocicd.netlify.app',
    },
  },
  {
    title: 'Sales Insights Dashboard',
    description:
      'Dashboard de análisis de ventas con visualizaciones interactivas. Pipeline ETL en Python que procesa datos transaccionales y los presenta en Power BI con métricas clave del negocio: ingresos, rotación y comportamiento por región.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI'],
    role: 'Emmanuel Quintero Gil',
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Customer Segmentation Tool',
    description:
      'Herramienta full-stack que aplica modelos de clustering para segmentar clientes. Frontend en React para visualizar los grupos, backend en Python con APIs REST y persistencia en PostgreSQL.',
    tags: ['React', 'Python', 'PostgreSQL', 'REST API'],
    role: 'Equipo',
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
        <p className="projects__eyebrow">{'// Lo que construimos'}</p>
        <h2 className="projects__title">Proyectos</h2>
        <p className="projects__intro">
          Una selección de proyectos donde combinamos desarrollo web y análisis de datos.
        </p>
      </header>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="projects__card">
            <div className="projects__card-body">
              <p className="projects__role">{project.role}</p>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>
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
                    GitHub →
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="projects__link projects__link--primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver live →
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
