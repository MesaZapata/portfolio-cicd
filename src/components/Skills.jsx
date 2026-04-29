import './Skills.css';

const TEAM_MEMBERS = [
  {
    name: 'Samuel Mesa Zapata',
    role: 'Frontend Engineering · DevOps',
    initials: 'SMZ',
    githubUser: 'MesaZapata',
    primary: ['React', 'TypeScript', 'Vite'],
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'CSS Modern',
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
    githubUser: 'Quintero-0226',
    primary: ['Python', 'SQL', 'Power BI'],
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
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <header className="skills__header">
        <p className="skills__eyebrow">
          <span className="skills__eyebrow-dash" aria-hidden="true"></span>
          02 — Skills &amp; Stack
        </p>
        <h2 className="skills__title">
          Dos perfiles, <em className="skills__display">una sola</em> visión.
        </h2>
        <p className="skills__intro">
          Cada uno trae herramientas distintas. Juntos cubrimos desde el
          producto hasta el insight.
        </p>
      </header>

      <div className="skills__grid">
        {TEAM_MEMBERS.map((member, index) => (
          <article key={member.name} className="skills__card">
            <div className="skills__card-meta">
              <span className="skills__card-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <a
                href={`https://github.com/${member.githubUser}`}
                className="skills__card-handle"
                target="_blank"
                rel="noreferrer"
              >
                @{member.githubUser} ↗
              </a>
            </div>

            <div className="skills__card-identity">
              <div className="skills__avatar" aria-hidden="true">
                {member.initials}
              </div>
              <div>
                <h3 className="skills__name">{member.name}</h3>
                <p className="skills__role">{member.role}</p>
              </div>
            </div>

            <div className="skills__primary">
              {member.primary.map((skill) => (
                <span key={skill} className="skills__primary-pill">
                  {skill}
                </span>
              ))}
            </div>

            <ul className="skills__list">
              {member.skills.map((skill) => (
                <li key={skill} className="skills__chip">
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
