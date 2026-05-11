import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faIndustry, faUtensils, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import BackgroundEffect from '../ui/BackgroundEffect'

const Hero = () => {
  const companies = [
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
    <section className='relative overflow-hidden bg-white pb-20 pt-28 dark:bg-gray-900 md:py-32'>
      <BackgroundEffect className='opacity-50' />

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
              className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 dark:bg-agilite-red dark:hover:bg-red-700 dark:text-white'
            >
              Our Services
            </a>
          </div>

          <div className='mt-20 bg-white/95 dark:bg-gray-800/95 rounded-xl p-8 backdrop-blur-xl shadow-xl max-w-4xl border-t border-l border-r border-b-4 border-agilite-red/20 dark:border-agilite-red/30'>
            <p className='text-gray-800 dark:text-gray-200 font-medium text-lg mb-8'>Trusted by Industry Leaders</p>
            <div className='grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 md:gap-8'>
              {companies.map((company, index) => (
                <a
                  key={index}
                  href={company.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative flex h-full w-full flex-col items-center rounded-lg border-2 border-agilite-red/40 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:border-agilite-red hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover:shadow-md dark:border-agilite-red/55 dark:bg-gray-800/90 dark:hover:from-gray-700 dark:hover:to-gray-800'
                >
                  <div className='mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-agilite-red/20 to-gray-200 transition-all duration-300 group-hover:from-agilite-red/30 group-hover:to-agilite-red/20 dark:from-agilite-red/30 dark:to-agilite-red/20'>
                    <FontAwesomeIcon
                      icon={company.icon}
                      className='transform text-xl text-agilite-red transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <span className='mb-2 flex min-h-[3.5rem] flex-1 items-center justify-center text-center text-lg font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-agilite-red dark:text-white'>
                    {company.name}
                  </span>
                  <span className='mt-auto text-center text-sm text-gray-600 dark:text-gray-400'>{company.industry}</span>
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
