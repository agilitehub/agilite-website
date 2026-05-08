import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faStore, faIndustry, faUtensils, faWarehouse } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  const companies = [
    {
      name: 'Meta-Health',
      href: 'https://www.meta-health.co.za/',
      industry: 'Healthcare',
      icon: faHospital
    },
    {
      name: 'Ace Retail Solutions',
      href: 'https://aceretail.co.za/',
      industry: 'Retail',
      icon: faStore
    },
    {
      name: 'AfriSam',
      href: 'https://www.afrisam.co.za/',
      industry: 'Manufacturing',
      icon: faWarehouse
    },
    {
      name: 'Air Products',
      href: 'https://www.airproducts.co.za/',
      industry: 'Industrial',
      icon: faIndustry
    },
    {
      name: 'A&W',
      href: 'https://www.aw.ca/',
      industry: 'Food Service',
      icon: faUtensils
    }
  ]

  return (
    <section className='relative py-20 md:py-32 overflow-hidden'>
      {/* Bold, eye-catching background */}
      <div className='absolute inset-0'>
        {/* Striking color gradient background */}
        <div className='absolute inset-0 bg-gradient-to-tr from-gray-200 via-white to-agilite-red/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>

        {/* Diagonal accent line */}
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-0 right-0 h-full w-2/3 bg-agilite-red/10 dark:bg-agilite-red/20 transform skew-x-12 translate-x-1/4'></div>
        </div>

        {/* Bold corner accent */}
        <div className='absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-agilite-red/20 to-transparent dark:from-agilite-red/30 dark:to-transparent'></div>

        {/* Logo-inspired node clusters in black - light mode */}
        <div className='absolute top-[25%] right-[15%] w-[240px] h-[240px] block dark:hidden animate-float-2'>
          <svg className='w-full h-full' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            {/* Main node center */}
            <circle cx='100' cy='100' r='8' fill='#4A545E' fillOpacity='0.5' />

            {/* Connected nodes in black - exact logo pattern */}
            <circle cx='100' cy='30' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='130' cy='40' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='150' cy='70' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='150' cy='100' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='150' cy='130' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='130' cy='160' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='100' cy='170' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='70' cy='160' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='50' cy='130' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='50' cy='100' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='50' cy='70' r='5' fill='black' fillOpacity='0.7' />
            <circle cx='70' cy='40' r='5' fill='black' fillOpacity='0.7' />

            {/* Connection lines */}
            <line x1='100' y1='100' x2='100' y2='30' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='130' y2='40' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='150' y2='70' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='150' y2='100' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='150' y2='130' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='130' y2='160' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='100' y2='170' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='70' y2='160' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='50' y2='130' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='50' y2='100' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='50' y2='70' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='70' y2='40' stroke='black' strokeWidth='1' strokeOpacity='0.5' />
          </svg>
        </div>

        <div className='absolute bottom-[15%] left-[10%] w-[200px] h-[200px] block dark:hidden animate-float-3'>
          <svg className='w-full h-full' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            {/* Main node center */}
            <circle cx='100' cy='100' r='7' fill='#4A545E' fillOpacity='0.5' />

            {/* Connected nodes in black - exact logo pattern */}
            <circle cx='100' cy='35' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='125' cy='45' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='145' cy='70' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='145' cy='100' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='145' cy='130' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='125' cy='155' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='100' cy='165' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='75' cy='155' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='55' cy='130' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='55' cy='100' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='55' cy='70' r='4' fill='black' fillOpacity='0.6' />
            <circle cx='75' cy='45' r='4' fill='black' fillOpacity='0.6' />

            {/* Connection lines */}
            <line x1='100' y1='100' x2='100' y2='35' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='125' y2='45' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='145' y2='70' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='145' y2='100' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='145' y2='130' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='125' y2='155' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='100' y2='165' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='75' y2='155' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='55' y2='130' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='55' y2='100' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='55' y2='70' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
            <line x1='100' y1='100' x2='75' y2='45' stroke='black' strokeWidth='0.8' strokeOpacity='0.4' />
          </svg>
        </div>

        {/* Logo-inspired node clusters in white - dark mode */}
        <div className='absolute top-[25%] right-[15%] w-[240px] h-[240px] hidden dark:block animate-float-2'>
          <svg className='w-full h-full' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            {/* Main node center */}
            <circle cx='100' cy='100' r='8' fill='#6B7280' fillOpacity='0.7' />

            {/* Connected nodes in white - exact logo pattern */}
            <circle cx='100' cy='30' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='130' cy='40' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='150' cy='70' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='150' cy='100' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='150' cy='130' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='130' cy='160' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='100' cy='170' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='70' cy='160' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='50' cy='130' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='50' cy='100' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='50' cy='70' r='5' fill='white' fillOpacity='0.8' />
            <circle cx='70' cy='40' r='5' fill='white' fillOpacity='0.8' />

            {/* Connection lines */}
            <line x1='100' y1='100' x2='100' y2='30' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='130' y2='40' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='150' y2='70' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='150' y2='100' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='150' y2='130' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='130' y2='160' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='100' y2='170' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='70' y2='160' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='50' y2='130' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='50' y2='100' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='50' y2='70' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
            <line x1='100' y1='100' x2='70' y2='40' stroke='white' strokeWidth='1' strokeOpacity='0.6' />
          </svg>
        </div>

        <div className='absolute bottom-[15%] left-[10%] w-[200px] h-[200px] hidden dark:block animate-float-3'>
          <svg className='w-full h-full' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            {/* Main node center */}
            <circle cx='100' cy='100' r='7' fill='#6B7280' fillOpacity='0.7' />

            {/* Connected nodes in white - exact logo pattern */}
            <circle cx='100' cy='35' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='125' cy='45' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='145' cy='70' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='145' cy='100' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='145' cy='130' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='125' cy='155' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='100' cy='165' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='75' cy='155' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='55' cy='130' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='55' cy='100' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='55' cy='70' r='4' fill='white' fillOpacity='0.7' />
            <circle cx='75' cy='45' r='4' fill='white' fillOpacity='0.7' />

            {/* Connection lines */}
            <line x1='100' y1='100' x2='100' y2='35' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='125' y2='45' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='145' y2='70' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='145' y2='100' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='145' y2='130' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='125' y2='155' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='100' y2='165' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='75' y2='155' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='55' y2='130' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='55' y2='100' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='55' y2='70' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
            <line x1='100' y1='100' x2='75' y2='45' stroke='white' strokeWidth='0.8' strokeOpacity='0.5' />
          </svg>
        </div>
      </div>

      <div className='container relative z-10'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight'>
            Empowering <span className='text-agilite-red'>Agile</span> Integration Solutions
          </h1>
          <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10'>
            A microservice-first platform designed by developers, for developers. Streamline your workflows with our
            comprehensive suite of integration tools.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='#contact'
              className='relative group bg-agilite-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
            >
              <span className='relative z-10'>Contact Us</span>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
            </a>
            <a
              href='#services'
              className='bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-800/90 dark:hover:bg-gray-700 dark:text-white font-bold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
            >
              Our Services
            </a>
          </div>

          <div className='mt-20 bg-white/95 dark:bg-gray-800/95 rounded-xl p-8 backdrop-blur-xl shadow-xl max-w-4xl border-t border-l border-r border-b-4 border-agilite-red/20 dark:border-agilite-red/30'>
            <p className='text-gray-800 dark:text-gray-200 font-medium text-lg mb-8'>Trusted by Industry Leaders</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center'>
              {companies.map((company, index) => (
                <a
                  key={index}
                  href={company.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-700 dark:hover:to-gray-800 min-w-[160px] shadow-sm hover:shadow-md'
                >
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-agilite-red/20 to-gray-200 dark:from-agilite-red/30 dark:to-agilite-red/20 mb-3 group-hover:from-agilite-red/30 group-hover:to-agilite-red/20 transition-all duration-300'>
                    <FontAwesomeIcon
                      icon={company.icon}
                      className='text-agilite-red dark:text-agilite-red text-xl transform group-hover:scale-110 transition-transform duration-300 group-hover:text-agilite-red'
                    />
                  </div>
                  <span className='font-semibold text-gray-800 dark:text-white text-lg mb-1 group-hover:text-agilite-red transition-colors duration-300'>
                    {company.name}
                  </span>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>{company.industry}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
