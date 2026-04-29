import './Skills.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTilt } from '../hooks/useTilt';

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

function MemberCard({ member, index }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 6, scale: 1.01 });

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="skills__card"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="skills__card-glow" aria-hidden="true"></div>

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
          <span>{member.initials}</span>
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
  );
}

export function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="skills"
      className={`skills ${visible ? 'is-revealed' : ''}`}
    >
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
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
