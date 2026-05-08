import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './core/layout/Navbar'
import Hero from './core/layout/Hero'
import Features from './core/layout/Features'
import Services from './core/layout/Services'
import Modules from './core/layout/Modules'
import Team from './core/layout/Team'
import About from './core/layout/About'
import Contact from './core/layout/Contact'
import Footer from './core/layout/Footer'
import ChangelogPage from './modules/changelog/changelog'
import RoadmapPage from './modules/roadmap/roadmap'
import LoginPage from './modules/login/login'
import RegisterPage from './modules/register/register'
import ForgotPasswordPage from './modules/forgot-password/forgot-password'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Use system preference as fallback
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
  }

  const MainPage = () => (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-agilite-slate dark:text-white'>
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
  )

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/changelog' element={<ChangelogPage />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
