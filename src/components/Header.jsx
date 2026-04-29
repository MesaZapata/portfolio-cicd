import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="Inicio">
          <span className="header__logo-letter">S</span>
          <span className="header__logo-amp">&amp;</span>
          <span className="header__logo-letter">E</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#hero" className="header__link">
            <span className="header__link-num">01</span>
            <span>Inicio</span>
          </a>
          <a href="#skills" className="header__link">
            <span className="header__link-num">02</span>
            <span>Skills</span>
          </a>
          <a href="#projects" className="header__link">
            <span className="header__link-num">03</span>
            <span>Proyectos</span>
          </a>
          <a href="#contact" className="header__link">
            <span className="header__link-num">04</span>
            <span>Contacto</span>
          </a>
        </nav>

        <div className="header__status" role="status">
          <span className="header__status-dot" aria-hidden="true"></span>
          <span className="header__status-text">Disponibles</span>
        </div>
      </div>
    </header>
  );
}
