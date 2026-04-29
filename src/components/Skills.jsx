import './Skills.css';

const TEAM_MEMBERS = [
  {
    name: 'Samuel Mesa Zapata',
    role: 'Frontend & DevOps',
    initials: 'SMZ',
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Vite',
      'Git',
      'GitHub Actions',
      'Netlify',
      'CI/CD',
    ],
  },
  {
    name: 'Emmanuel Quintero Gil',
    role: 'Data Analytics',
    initials: 'EQG',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'Power BI',
      'Excel',
      'Estadística',
      'ETL',
      'Visualización',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <header className="skills__header">
        <p className="skills__eyebrow">{'// Nuestro stack técnico'}</p>
        <h2 className="skills__title">Skills &amp; Stack</h2>
        <p className="skills__intro">
          Somos un equipo con perfiles complementarios: desarrollo web del lado del producto
          y análisis de datos del lado del insight. Estas son las herramientas con las que
          trabajamos.
        </p>
      </header>

      <div className="skills__grid">
        {TEAM_MEMBERS.map((member) => (
          <article key={member.name} className="skills__card">
            <div className="skills__card-header">
              <div className="skills__avatar" aria-hidden="true">
                {member.initials}
              </div>
              <div>
                <h3 className="skills__card-name">{member.name}</h3>
                <p className="skills__card-role">{member.role}</p>
              </div>
            </div>
            <ul className="skills__list">
              {member.skills.map((skill) => (
                <li key={skill} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
