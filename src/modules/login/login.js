import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../core/ui/Logo'
import Navbar from '../../core/layout/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import BackgroundEffect from '../../core/ui/BackgroundEffect'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password })
  }

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <Navbar />
      <BackgroundEffect />
      <div className='min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:p-4 relative'>
        <div className='w-full max-w-md relative z-10'>
          {/* Logo and Title */}
          <div className='flex flex-col items-center mb-6 sm:mb-8'>
            <Logo size='large' className='mb-4 sm:mb-6 w-32 sm:w-auto' />
            <h1 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-white text-center px-2'>
              Welcome to the Agilit<span className='text-agilite-red'>-e</span> Portal
            </h1>
          </div>

          {/* Login Form */}
          <div className='relative'>
            <div className='absolute inset-0 animate-glow rounded-lg'></div>
            <div className='bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 relative z-10 border border-white/20 dark:border-gray-700/30'>
              <h2 className='text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-center'>
                Sign in below to access the Portal
              </h2>

              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                {/* Email Field */}
                <div>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 dark:text-gray-500' />
                    </div>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                      placeholder='Email'
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FontAwesomeIcon icon={faLock} className='text-gray-400 dark:text-gray-500' />
                    </div>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                      placeholder='Password'
                      required
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col space-y-4'>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2.5 sm:py-2 px-4 text-base sm:text-sm border border-transparent rounded-md shadow-sm text-white bg-agilite-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agilite-red transition-colors duration-200'
                  >
                    Sign In
                  </button>

                  <div className='flex justify-between items-center'>
                    <Link
                      to='/forgot-password'
                      className='text-base sm:text-sm text-agilite-red hover:text-red-700 transition-colors duration-200'
                    >
                      Forgot Password?
                    </Link>
                    <Link
                      to='/register'
                      className='text-base sm:text-sm text-agilite-red hover:text-red-700 transition-colors duration-200'
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Text */}
          <div className='mt-4 sm:mt-6 text-center text-sm text-gray-600 dark:text-gray-400 px-2'>
            This site is protected by reCAPTCHA and the Google{' '}
            <a href='#' className='text-agilite-red hover:text-red-700'>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href='#' className='text-agilite-red hover:text-red-700'>
              Terms of Service
            </a>{' '}
            apply.
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
