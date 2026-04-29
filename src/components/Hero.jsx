import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <p className="hero__greeting">{'// Hola, mundo'}</p>

        <h1 className="hero__title">
          Soy <span className="hero__name">Samuel Mesa Zapata</span>
        </h1>

        <h2 className="hero__role">Desarrollador Web Full-Stack</h2>

        <p className="hero__description">
          Construyo experiencias web modernas con React y herramientas de DevOps.
          Me apasionan la arquitectura limpia, el código mantenible y los pipelines
          de integración bien diseñados.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__button hero__button--primary">
            Ver proyectos
          </a>
          <a href="#contact" className="hero__button hero__button--secondary">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}
