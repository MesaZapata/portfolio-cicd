import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="scroll-progress" aria-hidden="true"></div>

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
