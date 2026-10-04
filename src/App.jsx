import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Hospitals from './components/Hospitals';
import PlatformFeatures from './components/PlatformFeatures';
import About from './components/About';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // ScrollSpy observer to highlight current nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'patients', 'doctors', 'hospitals', 'about', 'team'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
      
      {/* Sticky Top Navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Main Single-Page Sections Stacked */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Patients />
        <Doctors />
        <Hospitals />
        <PlatformFeatures />
        <About />
        <FAQ />
        <Reviews />
        <Team />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;