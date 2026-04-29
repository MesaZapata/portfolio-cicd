import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import { useCursor } from './hooks/useCursor';
import './App.css';

function App() {
  useCursor();

  return (
    <div className="app">
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="app__cursor" aria-hidden="true"></div>

      <Header />

      <main className="app__main">
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
