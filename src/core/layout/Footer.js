import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-agilite-grey-light dark:bg-agilite-black'>
      <div className='container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <Logo className='mb-4' style='accent-e' />
            <p className='text-agilite-slate dark:text-white mb-4'>
              Transforming businesses through low-code integration solutions.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
              >
                <FontAwesomeIcon icon={faTwitter} className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
              >
                <FontAwesomeIcon icon={faLinkedin} className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
              >
                <FontAwesomeIcon icon={faGithub} className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
              >
                <FontAwesomeIcon icon={faFacebook} className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-bold text-agilite-slate dark:text-white mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  API Management
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Integration Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Microservices
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Data Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-lg font-bold text-agilite-slate dark:text-white mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-lg font-bold text-agilite-slate dark:text-white mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors'
                >
                  PAIA
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-agilite-grey dark:border-secondary-light'>
          <div className='mt-8 text-center text-base text-gray-500 dark:text-gray-400'>
            &copy; {currentYear} Agilit<span className='text-agilite-red'>-e</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
