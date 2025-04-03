import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import Navbar from '../components/layout/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import BackgroundEffect from '../components/ui/BackgroundEffect';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    teamId: '',
    membershipType: 'Indie Spark Plan',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt with:', formData);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <BackgroundEffect />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:p-4 relative">
        <div className="w-full max-w-md relative z-10">
          {/* Logo and Title */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <Logo size="large" className="mb-4 sm:mb-6 w-32 sm:w-auto" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white text-center px-2">
              Create Your Account
            </h1>
          </div>

          {/* Registration Form */}
          <div className="relative">
            <div className="absolute inset-0 animate-glow rounded-lg"></div>
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 relative z-10 border border-white/20 dark:border-gray-700/30">
              <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-center">
                Use the form below to register with Agilit<span className="text-agilite-red">-e</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* First Name */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                {/* Team ID */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faBuilding} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="teamId"
                      value={formData.teamId}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="Team ID"
                      required
                    />
                  </div>
                </div>

                {/* Membership Type */}
                <div>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="block w-full pl-3 pr-10 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                    required
                  >
                    <option value="Indie Spark Plan">Indie Spark Plan</option>
                    <option value="Team Plan">Team Plan</option>
                    <option value="Enterprise Plan">Enterprise Plan</option>
                  </select>
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faLock} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faLock} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agilite-red focus:border-transparent"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 px-1">
                  <p>Password must:</p>
                  <ul className="list-disc list-inside pl-2">
                    <li>Be minimum of 8 characters</li>
                    <li>Contain a symbol</li>
                    <li>Contain a number</li>
                    <li>Contain an uppercase letter</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2.5 sm:py-2 px-4 text-base sm:text-sm border border-transparent rounded-md shadow-sm text-white bg-agilite-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agilite-red transition-colors duration-200"
                  >
                    Register
                  </button>
                  
                  <Link
                    to="/login"
                    className="text-center text-base sm:text-sm text-agilite-red hover:text-red-700 transition-colors duration-200"
                  >
                    Already have an account? Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-4 sm:mt-6 text-center text-sm text-gray-600 dark:text-gray-400 px-2">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-agilite-red hover:text-red-700">Privacy Policy</a> and{' '}
            <a href="#" className="text-agilite-red hover:text-red-700">Terms of Service</a> apply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 