import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLightbulb, faStar, faHandshake } from '@fortawesome/free-solid-svg-icons'
import Logo from '../ui/Logo'
import BackgroundEffect from '../ui/BackgroundEffect'

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='w-16 h-16 rounded-full bg-agilite-red/15 dark:bg-agilite-red/25 flex items-center justify-center mb-4 shadow-md'>
        <FontAwesomeIcon icon={icon} className='h-8 w-8 text-agilite-red dark:text-agilite-red' />
      </div>
      <h3 className='text-xl font-semibold text-agilite-slate dark:text-gray-100 mb-2'>{title}</h3>
      <p className='text-agilite-slate/90 dark:text-gray-300'>{description}</p>
    </div>
  )
}

const About = () => {
  const values = [
    {
      icon: faLightbulb,
      title: 'Innovation',
      description:
        'We continuously research and develop new integration approaches to solve complex business challenges.'
    },
    {
      icon: faHeart,
      title: 'Passion',
      description: 'Our team is dedicated to excellence, always striving to deliver the highest quality solutions.'
    },
    {
      icon: faStar,
      title: 'Excellence',
      description: 'We are committed to the best in performance, scalability, and security in everything we do.'
    },
    {
      icon: faHandshake,
      title: 'Partnership',
      description: 'We work closely with our clients, becoming an extension of their team throughout the journey.'
    }
  ]

  return (
    <section id='about' className='relative bg-gray-50 py-20 dark:bg-gray-900'>
      <BackgroundEffect />

      <div className='container relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-agilite-slate dark:text-white mb-4'>
            About Agilit<span className='text-agilite-red'>-e</span>
          </h2>
          <p className='text-xl text-agilite-slate/90 dark:text-gray-200 max-w-3xl mx-auto'>
            We are a team of integration experts committed to helping businesses streamline operations and achieve
            digital transformation.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          <div className='order-2 lg:order-1'>
            <h3 className='text-2xl font-bold text-agilite-slate dark:text-white mb-4'>Our Mission</h3>
            <p className='text-agilite-slate/90 dark:text-gray-300 mb-4'>
              Agilit<span className='text-agilite-red'>-e</span>, pronounced "agility," is a low-code, agile,
              integration service portal created to simplify complex system integrations. Our mission is to help
              businesses overcome integration challenges with elegant, performant solutions.
            </p>
            <p className='text-agilite-slate/90 dark:text-gray-300 mb-4'>
              We strive for the best in performance, scalability, and security. We continually challenge ourselves to
              make the Agilit<span className='text-agilite-red'>-e</span> framework quicker, better, and more secure.
            </p>
            <p className='text-agilite-slate/90 dark:text-gray-300 mb-4'>
              With Agilit<span className='text-agilite-red'>-e</span>, you can configure API profiles that scale across
              multiple modules to create custom microservices and integrations between systems—all with minimal coding
              required.
            </p>
          </div>
          <div className='order-1 lg:order-2 flex justify-center'>
            <div className='bg-white/80 dark:bg-gray-800 p-10 rounded-full shadow-xl'>
              <div className='flex items-center justify-center'>
                <Logo
                  className='origin-center scale-[2.25] transform sm:scale-[3] md:scale-[3.5] lg:scale-[4]'
                  showText={false}
                  variant='grayscale'
                  style='accent-ae'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16'>
          <div className='text-center mb-10'>
            <h3 className='text-2xl font-bold text-agilite-slate dark:text-white'>Our Approach</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
              <h4 className='text-xl font-semibold text-agilite-slate dark:text-white mb-2'>API-First Design</h4>
              <p className='text-agilite-slate/90 dark:text-gray-300'>
                Agilit<span className='text-agilite-red'>-e</span> is designed as an API-first solution, based on a
                microservices architecture and strategy. This approach enables flexible, scalable integrations that can
                adapt to changing business needs.
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
              <h4 className='text-xl font-semibold text-agilite-slate dark:text-white mb-2'>Low-Code Philosophy</h4>
              <p className='text-agilite-slate/90 dark:text-gray-300'>
                With almost no technical skills required to get Agilit<span className='text-agilite-red'>-e</span>{' '}
                working for you, we've made complex integrations accessible to business users while still providing the
                power developers need.
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
              <h4 className='text-xl font-semibold text-agilite-slate dark:text-white mb-2'>Modular Architecture</h4>
              <p className='text-agilite-slate/90 dark:text-gray-300'>
                Our series of Agilit<span className='text-agilite-red'>-e</span> Modules cater to many application
                requirements, allowing you to build custom solutions that precisely match your business needs.
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
              <h4 className='text-xl font-semibold text-agilite-slate dark:text-white mb-2'>Rapid Implementation</h4>
              <p className='text-agilite-slate/90 dark:text-gray-300'>
                Create complex integration flows in minutes with Agilit<span className='text-agilite-red'>-e</span> and
                Node-RED, dramatically reducing development time and accelerating your path to digital transformation.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center mb-10'>
          <h3 className='text-2xl font-bold text-agilite-slate dark:text-white'>Our Values</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {values.map((value, index) => (
            <AboutCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
