import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <p className="hero__greeting">{'// Hola, mundo'}</p>

        <h1 className="hero__title">
          Somos <span className="hero__name">Samuel &amp; Emmanuel</span>
        </h1>

        <h2 className="hero__role">Equipo Web + Data Analytics</h2>

        <p className="hero__description">
          Construimos productos donde el código y los datos se encuentran. Samuel desarrolla
          experiencias web modernas con React y aplica buenas prácticas de DevOps; Emmanuel
          extrae insights de los datos con Python y herramientas de análisis. Juntos hacemos
          que las decisiones sean más informadas.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__button hero__button--primary">
            Ver proyectos
          </a>
          <a href="#contact" className="hero__button hero__button--secondary">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}
