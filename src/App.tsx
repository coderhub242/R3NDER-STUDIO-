import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add custom cursor styling globally to give that premium feel
    document.body.style.cursor = 'default';
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;