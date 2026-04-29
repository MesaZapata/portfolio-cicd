import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        {/* Hero → PR #2 (feature/hero) */}
        {/* Skills → PR #3 (feature/skills) */}
        {/* Projects → PR #4 (feature/projects) */}

        <section className="app__placeholder">
          <h1>Portfolio CI/CD</h1>
          <p>Sitio en construcción — los componentes se irán agregando en cada PR.</p>
        </section>
      </main>

      {/* Footer → PR #5 (feature/footer) */}
    </div>
  );
}

export default App;
