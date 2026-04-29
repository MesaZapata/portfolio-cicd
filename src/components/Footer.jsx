import './Footer.css';

const TEAM = [
  {
    name: 'Samuel Mesa Zapata',
    role: 'Frontend & DevOps',
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
      <div className="footer__container">
        <div className="footer__head">
          <p className="footer__eyebrow">{'// Hablemos'}</p>
          <h2 className="footer__title">¿Te interesa colaborar?</h2>
          <p className="footer__intro">
            Estamos abiertos a oportunidades de desarrollo, análisis de datos o trabajo
            en equipo sobre productos donde el código y los datos se encuentran.
          </p>
        </div>

        <div className="footer__team">
          {TEAM.map((member) => (
            <article key={member.name} className="footer__card">
              <h3 className="footer__name">{member.name}</h3>
              <p className="footer__role">{member.role}</p>
              <a
                href={`https://github.com/${member.githubUser}`}
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                @{member.githubUser} →
              </a>
            </article>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Samuel Mesa Zapata &amp; Emmanuel Quintero Gil
          </p>
          <p className="footer__meta">
            Construido con React + Vite, desplegado en Netlify · Módulo CI/CD
          </p>
        </div>
      </div>
    </footer>
  );
}
