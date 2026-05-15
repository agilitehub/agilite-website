import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const lastScrollPosition = useRef(0)
  const scrollTimeout = useRef(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY

      // Update navbar opacity
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Don't update active section on every scroll event
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        // Get all section elements to find which one is most visible
        const sections = ['features', 'services', 'modules', 'team', 'about', 'contact']
        const navbarHeight = 80 // Approximate navbar height

        // If we're at the top of the page, select home
        if (offset < 100) {
          setActiveSection('home')
          return
        }

        // First pass: exact match detection (when a section is at the top)
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId)
          if (!section) continue

          const rect = section.getBoundingClientRect()
          // If section top is right at the navbar, it's definitely the active one
          if (Math.abs(rect.top - navbarHeight) < 20) {
            setActiveSection(sectionId)
            return
          }
        }

        // Second pass: find which section occupies most of the viewport
        const visibleSections = []

        for (const sectionId of sections) {
          const section = document.getElementById(sectionId)
          if (!section) continue

          const rect = section.getBoundingClientRect()
          const viewportHeight = window.innerHeight

          // Skip sections that are completely above or below viewport
          if (rect.bottom < navbarHeight || rect.top > viewportHeight) {
            continue
          }

          // Calculate visible part of the section
          const visibleTop = Math.max(rect.top, navbarHeight)
          const visibleBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = visibleBottom - visibleTop

          // Only consider sections with significant visibility
          if (visibleHeight > 100) {
            // Give more weight to sections near the top of the viewport
            let score = visibleHeight

            // If the section's top is in view, give it a big boost
            if (rect.top >= navbarHeight && rect.top < viewportHeight) {
              score += 500
            }

            // Add to our array of visible sections
            visibleSections.push({
              id: sectionId,
              score,
              topPosition: rect.top
            })
          }
        }

        // Sort by score (highest first)
        visibleSections.sort((a, b) => b.score - a.score)

        // If there are sections in view and the best one is different from current
        if (visibleSections.length > 0 && visibleSections[0].id !== activeSection) {
          // Special case for Team: only select it if it's clearly the most visible
          // or if we're very close to its top
          if (visibleSections[0].id === 'team') {
            // Must have a significantly higher score than the next section to be selected
            if (
              visibleSections.length === 1 ||
              visibleSections[0].score > visibleSections[1].score * 1.5 ||
              visibleSections[0].topPosition < navbarHeight + 50
            ) {
              setActiveSection('team')
            }
          } else {
            setActiveSection(visibleSections[0].id)
          }
        }
      }, 100)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, []) // No dependency on activeSection

  // Handle initial section highlight from URL hash
  useEffect(() => {
    // Only apply hash-based navigation if there actually is a hash
    if (location.hash) {
      const section = location.hash.substring(1)
      setActiveSection(section)

      // Scroll to section after a short delay to ensure components are rendered
      setTimeout(() => {
        scrollToSection(section)
      }, 300)
    } else {
      // If no hash, default to home or first visible section instead of auto-selecting team
      setActiveSection('home')
    }
  }, [location.hash])

  // Add a new effect to prevent Team from being auto-selected on scroll
  useEffect(() => {
    // Run once on mount to detect visible sections without auto-scrolling
    const detectInitialVisibleSection = () => {
      const sections = ['features', 'services', 'modules', 'team', 'about', 'contact']
      const navbarHeight = 80
      const scrollY = window.scrollY

      // If we're at the top of the page, select home
      if (scrollY < 100) {
        setActiveSection('home')
        return
      }

      // Find the section we're currently viewing
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollY - navbarHeight
        const sectionBottom = rect.bottom + scrollY - navbarHeight

        // If we're within this section's bounds
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(sectionId)
          return
        }
      }
    }

    // Only run if we don't have a hash in the URL
    if (!location.hash) {
      detectInitialVisibleSection()
    }
  }, []) // Only run once on component mount

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Approximate navbar height
      const offsetPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()

    // If we're not on the homepage and the section is on homepage
    if (
      location.pathname !== '/' &&
      ['features', 'services', 'modules', 'team', 'about', 'contact'].includes(sectionId)
    ) {
      navigate(`/#${sectionId}`)
      return
    }

    // Force active state immediately for better user feedback
    setActiveSection(sectionId)

    // Close mobile menu
    setIsOpen(false)

    // Scroll to section after a small delay to ensure UI updates first
    requestAnimationFrame(() => {
      scrollToSection(sectionId)
    })
  }

  const handleHomeClick = (e) => {
    setActiveSection('home')
    setIsOpen(false)

    if (location.pathname !== '/') {
      return
    }

    e.preventDefault()

    if (location.hash) {
      navigate('/', { replace: true })
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const navbarClasses = `
    fixed inset-x-0 top-0 z-50 border-b-2 py-3
    bg-white/95 backdrop-blur-md dark:bg-gray-900/95
    transition-[background,box-shadow,border-color] duration-300
    ${
      scrolled
        ? 'bg-gradient-to-r from-white/95 via-white/95 to-agilite-red/5 dark:from-gray-900/95 dark:via-gray-900/95 dark:to-agilite-red/10 shadow-lg border-agilite-red/20 dark:border-agilite-red/30'
        : 'bg-gradient-to-r from-white/95 via-white/95 to-agilite-red/10 dark:from-gray-900/95 dark:via-gray-900/95 dark:to-agilite-red/20 shadow-md border-transparent'
    }
  `

  const getNavLinkClasses = (sectionId) => {
    const isActive =
      activeSection === sectionId ||
      location.pathname === `/${sectionId}` ||
      (location.pathname === '/' && location.hash === `#${sectionId}`)

    return `text-sm 2xl:text-base text-gray-800 dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-all duration-300 font-semibold relative group whitespace-nowrap px-1.5 py-1 2xl:px-2 ${isActive ? 'text-agilite-red dark:text-agilite-red' : ''}`
  }

  const getNavLinkBarClasses = (sectionId) => {
    const isActive =
      activeSection === sectionId ||
      location.pathname === `/${sectionId}` ||
      (location.pathname === '/' && location.hash === `#${sectionId}`)

    return `absolute bottom-0 left-0 h-0.5 bg-agilite-red transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`
  }

  return (
    <nav className={navbarClasses}>
      <div className='container mx-auto flex min-h-[5rem] items-center justify-between px-4'>
        {/* Logo */}
        <Link to='/' className='flex shrink-0 cursor-default select-none items-center' onClick={handleHomeClick}>
          <Logo showText={true} size='medium' style='accent-e' />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden min-w-0 xl:ml-10 xl:flex xl:items-center xl:gap-x-4 2xl:ml-16 2xl:gap-x-7'>
          <Link to='/' className={getNavLinkClasses('home')} onClick={handleHomeClick}>
            Home
            <span className={getNavLinkBarClasses('home')}></span>
          </Link>
          <a href='#features' className={getNavLinkClasses('features')} onClick={(e) => handleNavClick(e, 'features')}>
            Features
            <span className={getNavLinkBarClasses('features')}></span>
          </a>
          <a href='#services' className={getNavLinkClasses('services')} onClick={(e) => handleNavClick(e, 'services')}>
            Services
            <span className={getNavLinkBarClasses('services')}></span>
          </a>
          <a href='#modules' className={getNavLinkClasses('modules')} onClick={(e) => handleNavClick(e, 'modules')}>
            Modules
            <span className={getNavLinkBarClasses('modules')}></span>
          </a>
          <a href='#team' className={getNavLinkClasses('team')} onClick={(e) => handleNavClick(e, 'team')}>
            Team
            <span className={getNavLinkBarClasses('team')}></span>
          </a>
          <a href='#about' className={getNavLinkClasses('about')} onClick={(e) => handleNavClick(e, 'about')}>
            About
            <span className={getNavLinkBarClasses('about')}></span>
          </a>
          <a href='#contact' className={getNavLinkClasses('contact')} onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
            <span className={getNavLinkBarClasses('contact')}></span>
          </a>
          <Link to='/changelog' className={getNavLinkClasses('changelog')}>
            Changelog
            <span className={getNavLinkBarClasses('changelog')}></span>
          </Link>
          <Link to='/roadmap' className={getNavLinkClasses('roadmap')}>
            Roadmap
            <span className={getNavLinkBarClasses('roadmap')}></span>
          </Link>
          <Link
            to='/login'
            className='ml-2 shrink-0 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-agilite-red/90 hover:shadow-lg sm:px-5 sm:text-base 2xl:ml-4 bg-agilite-red rounded-lg shadow-md'
          >
            Login
          </Link>
          <ThemeToggle className='ml-2 shrink-0 2xl:ml-4' />
        </div>

        {/* Mobile menu button */}
        <div className='flex items-center xl:hidden'>
          <ThemeToggle className='mr-4' />
          <button
            type='button'
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
            onClick={() => setIsOpen((open) => !open)}
            className='rounded-md p-2 text-gray-800 transition-colors duration-300 hover:text-agilite-red dark:text-white dark:hover:text-agilite-red'
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='text-xl' />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id='mobile-navigation'
          role='dialog'
          aria-modal='true'
          aria-label='Mobile navigation'
          className='absolute left-0 right-0 top-full z-50 max-h-[min(70vh,calc(100vh-6.5rem))] overflow-y-auto border-b-2 border-agilite-red/20 bg-white shadow-lg dark:border-agilite-red/30 dark:bg-gray-900 xl:hidden'
        >
          <div className='container mx-auto flex flex-col space-y-4 px-4 py-4'>
          <Link to='/' className={getNavLinkClasses('home')} onClick={handleHomeClick}>
            Home
            <span className={getNavLinkBarClasses('home')}></span>
          </Link>
          <a href='#features' className={getNavLinkClasses('features')} onClick={(e) => handleNavClick(e, 'features')}>
            Features
            <span className={getNavLinkBarClasses('features')}></span>
          </a>
          <a href='#services' className={getNavLinkClasses('services')} onClick={(e) => handleNavClick(e, 'services')}>
            Services
            <span className={getNavLinkBarClasses('services')}></span>
          </a>
          <a href='#modules' className={getNavLinkClasses('modules')} onClick={(e) => handleNavClick(e, 'modules')}>
            Modules
            <span className={getNavLinkBarClasses('modules')}></span>
          </a>
          <a href='#team' className={getNavLinkClasses('team')} onClick={(e) => handleNavClick(e, 'team')}>
            Team
            <span className={getNavLinkBarClasses('team')}></span>
          </a>
          <a href='#about' className={getNavLinkClasses('about')} onClick={(e) => handleNavClick(e, 'about')}>
            About
            <span className={getNavLinkBarClasses('about')}></span>
          </a>
          <a href='#contact' className={getNavLinkClasses('contact')} onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
            <span className={getNavLinkBarClasses('contact')}></span>
          </a>
          <Link to='/changelog' className={getNavLinkClasses('changelog')} onClick={() => setIsOpen(false)}>
            Changelog
            <span className={getNavLinkBarClasses('changelog')}></span>
          </Link>
          <Link to='/roadmap' className={getNavLinkClasses('roadmap')} onClick={() => setIsOpen(false)}>
            Roadmap
            <span className={getNavLinkBarClasses('roadmap')}></span>
          </Link>
          <Link
            to='/login'
            className='px-5 py-2 bg-agilite-red hover:bg-agilite-red/90 text-white rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit'
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
