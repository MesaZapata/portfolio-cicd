import './Hero.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGlobalTilt } from '../hooks/useGlobalTilt';

export function Hero() {
  const { ref: sectionRef, visible } = useScrollReveal();
  const stageRef = useGlobalTilt({ max: 45, smooth: 0.08, baseX: -18, baseY: 28 });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`hero ${visible ? 'is-revealed' : ''}`}
    >
      <div className="hero__decor" aria-hidden="true">
        <div className="hero__blob hero__blob--cyan"></div>
        <div className="hero__blob hero__blob--magenta"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__inner">
        <div className="hero__visual">
          <div className="hero__visual-frame" aria-hidden="true">
            <div className="hero__stage" ref={stageRef}>
              <div className="hero__cube">
                <div className="hero__face hero__face--front">
                  <span className="hero__face-mono">{'</>'}</span>
                </div>
                <div className="hero__face hero__face--back">
                  <span className="hero__face-mono">{'{ }'}</span>
                </div>
                <div className="hero__face hero__face--right">
                  <span className="hero__face-label">DATA</span>
                </div>
                <div className="hero__face hero__face--left">
                  <span className="hero__face-label">CODE</span>
                </div>
                <div className="hero__face hero__face--top">
                  <span className="hero__face-mono">×</span>
                </div>
                <div className="hero__face hero__face--bottom">
                  <span className="hero__face-mono">∞</span>
                </div>
              </div>

              <div className="hero__orbit hero__orbit--one">
                <span className="hero__particle"></span>
              </div>
              <div className="hero__orbit hero__orbit--two">
                <span className="hero__particle hero__particle--magenta"></span>
              </div>
            </div>
          </div>

          <p className="hero__hint" aria-hidden="true">
            <span className="hero__hint-dot"></span>
            Move cursor to interact
          </p>
        </div>

        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dash" aria-hidden="true"></span>
          Equipo Web × Data Analytics
        </p>

        <h1 className="hero__title">
          <span className="hero__title-row">
            Donde el <em className="hero__display">código</em>
          </span>
          <span className="hero__title-row">
            y los <em className="hero__display hero__display--magenta">datos</em>
          </span>
          <span className="hero__title-row">se encuentran.</span>
        </h1>

        <p className="hero__lede">
          Somos <strong>Samuel Mesa Zapata</strong> y{' '}
          <strong>Emmanuel Quintero Gil</strong>. Combinamos ingeniería frontend
          moderna con análisis de datos: convertimos ideas en interfaces y datos
          en decisiones.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            <span className="hero__btn-label">Ver proyectos</span>
            <span className="hero__btn-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Hablemos
          </a>
        </div>

        <dl className="hero__stats">
          <div className="hero__stat">
            <dt className="hero__stat-label">Stack</dt>
            <dd className="hero__stat-value">React · Python</dd>
          </div>
          <div className="hero__stat">
            <dt className="hero__stat-label">Pipeline</dt>
            <dd className="hero__stat-value">CI/CD</dd>
          </div>
          <div className="hero__stat">
            <dt className="hero__stat-label">Status</dt>
            <dd className="hero__stat-value hero__stat-value--accent">
              Abiertos
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
