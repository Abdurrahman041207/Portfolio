import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => (
  <div className="app-shell">
    <FloatingNav />
    <Hero />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <footer className="footer">
      <p>© {new Date().getFullYear()} Abdur Rahman · Built with React + Vite</p>
      <a href="mailto:hey@abdur.dev">hey@abdur.dev</a>
    </footer>
  </div>
);

export default App;
