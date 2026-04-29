import './Footer.css';

const TEAM = [
  {
    name: 'Samuel Mesa Zapata',
    role: 'Frontend · DevOps',
    githubUser: 'MesaZapata',
  },
  {
    name: 'Emmanuel Quintero Gil',
    role: 'Data Analytics',
    githubUser: 'Quintero-0226',
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__cta">
          <p className="footer__eyebrow">
            <span className="footer__eyebrow-dash" aria-hidden="true"></span>
            04 — Hablemos
          </p>
          <h2 className="footer__title">
            ¿Tenés algo en mente? <em className="footer__display">Construyámoslo</em>.
          </h2>
          <p className="footer__intro">
            Estamos abiertos a oportunidades de desarrollo, análisis de datos o
            colaboraciones donde el código y los datos se encuentran.
          </p>
        </div>

        <div className="footer__team">
          {TEAM.map((member) => (
            <a
              key={member.name}
              href={`https://github.com/${member.githubUser}`}
              className="footer__member"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer__member-info">
                <p className="footer__member-role">{member.role}</p>
                <h3 className="footer__member-name">{member.name}</h3>
                <p className="footer__member-handle">
                  @{member.githubUser}
                </p>
              </div>
              <span className="footer__member-arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            <span className="footer__copy-mark">©</span> {year} S&amp;E ·
            Samuel Mesa Zapata &amp; Emmanuel Quintero Gil
          </p>
          <p className="footer__meta">
            Construido con React + Vite · Desplegado en Netlify · Módulo CI/CD
          </p>
        </div>
      </div>
    </footer>
  );
}
