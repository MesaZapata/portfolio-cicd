import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <div className="hero__blob hero__blob--one"></div>
        <div className="hero__blob hero__blob--two"></div>
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow fade-in" style={{ animationDelay: '0ms' }}>
          <span className="hero__eyebrow-dash" aria-hidden="true"></span>
          Equipo Web × Data Analytics
        </p>

        <h1 className="hero__title fade-in" style={{ animationDelay: '100ms' }}>
          <span className="hero__title-row">
            <em className="hero__display">Construimos</em> productos
          </span>
          <span className="hero__title-row">
            donde el <em className="hero__display">código</em>
          </span>
          <span className="hero__title-row">
            y los <em className="hero__display">datos</em> se encuentran.
          </span>
        </h1>

        <p className="hero__lede fade-in" style={{ animationDelay: '350ms' }}>
          Somos <strong>Samuel Mesa Zapata</strong> y{' '}
          <strong>Emmanuel Quintero Gil</strong>: un dúo que combina ingeniería
          frontend moderna con análisis de datos. Convertimos ideas en interfaces y
          datos en decisiones.
        </p>

        <div className="hero__cta fade-in" style={{ animationDelay: '550ms' }}>
          <a href="#projects" className="hero__btn hero__btn--primary">
            <span>Ver proyectos</span>
            <span className="hero__btn-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Hablemos
          </a>
        </div>

        <dl className="hero__stats fade-in" style={{ animationDelay: '750ms' }}>
          <div className="hero__stat">
            <dt className="hero__stat-label">Stack</dt>
            <dd className="hero__stat-value">React · Python</dd>
          </div>
          <div className="hero__stat">
            <dt className="hero__stat-label">Pipeline</dt>
            <dd className="hero__stat-value">CI/CD</dd>
          </div>
          <div className="hero__stat">
            <dt className="hero__stat-label">Disponibilidad</dt>
            <dd className="hero__stat-value hero__stat-value--accent">Abierta</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
