import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Features from './components/layout/Features';
import Services from './components/layout/Services';
import Modules from './components/layout/Modules';
import Team from './components/layout/Team';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import ChangelogPage from './pages/ChangelogPage';
import RoadmapPage from './pages/RoadmapPage';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Use system preference as fallback
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const MainPage = () => (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-agilite-slate dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Modules />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
