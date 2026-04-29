import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Hero />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
