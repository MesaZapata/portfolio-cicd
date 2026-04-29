import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#top" className="header__logo" aria-label="Inicio">
          <span className="header__logo-bracket">&lt;</span>
          S&amp;E
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            <li>
              <a href="#hero" className="header__nav-link">Inicio</a>
            </li>
            <li>
              <a href="#skills" className="header__nav-link">Skills</a>
            </li>
            <li>
              <a href="#projects" className="header__nav-link">Proyectos</a>
            </li>
            <li>
              <a href="#contact" className="header__nav-link">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
