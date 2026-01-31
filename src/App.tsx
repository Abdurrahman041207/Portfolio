import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => (
  <div className="w-[min(1200px,90vw)] mx-auto pb-30 relative">
    <FloatingNav />
    <Hero />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <footer className="mt-20 pt-10 border-t border-white/[0.06] flex justify-between flex-wrap gap-3 text-text-muted">
      <p>© {new Date().getFullYear()} Abdur Rahman · Built with React + Vite</p>
      <a href="mailto:hey@abdur.dev">hey@abdur.dev</a>
    </footer>
  </div>
);

export default App;
