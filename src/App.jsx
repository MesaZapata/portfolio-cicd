import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Hero />
        <Skills />
        {/* Projects → PR #4 (feature/projects) */}
      </main>

      {/* Footer → PR #5 (feature/footer) */}
    </div>
  );
}

export default App;
