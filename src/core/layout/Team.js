import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import BackgroundEffect from '../ui/BackgroundEffect'

const TeamMember = ({ name, role, image, socials, bio }) => {
  return (
    <div className='flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group'>
      <div className='relative w-full'>
        <div className='aspect-w-1 aspect-h-1 w-full'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-agilite-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center'>
          <div className='flex space-x-4 mb-6'>
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-200 transition-colors'
              >
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
              </a>
            )}
            {socials.facebook && (
              <a
                href={socials.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-200 transition-colors'
              >
                <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-200 transition-colors'
              >
                <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-200 transition-colors'
              >
                <FontAwesomeIcon icon={faGithub} className='h-6 w-6' />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='p-6 text-center'>
        <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-agilite-red transition-colors duration-300'>
          {name}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-3'>{role}</p>
        {bio && <p className='text-sm text-gray-500 dark:text-gray-400'>{bio}</p>}
      </div>
    </div>
  )
}

const Team = () => {
  const teamMembers = [
    {
      name: 'John Jardin',
      role: 'CEO',
      image: '/images/team/john-jardin.jpg',
      bio: 'As the CEO of Agilit<span className="text-agilite-red">-e</span>, John is constantly researching and mastering cutting edge integration technologies to help businesses connect their systems and streamline operations.',
      socials: {
        linkedin: 'https://za.linkedin.com/in/johnjardin',
        facebook: 'https://www.facebook.com/john.jardin'
      }
    },
    {
      name: 'Dawid van Heerden',
      role: 'Partner',
      image: '/images/team/dawid-placeholder.jpg',
      bio: 'Dawid brings extensive expertise in system integration and business process optimization to Agilit<span className="text-agilite-red">-e</span>, working closely with clients to deliver tailored solutions.',
      socials: {
        linkedin: 'https://www.linkedin.com/'
      }
    },
    {
      name: 'Armand Smit',
      role: 'Senior Software Developer',
      image: '/images/team/armand-placeholder.jpg',
      bio: 'With deep technical knowledge and years of experience, Armand specializes in creating robust solutions that meet complex business requirements and technical challenges.',
      socials: {
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/'
      }
    }
  ]

  return (
    <section id='team' className='py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden'>
      <BackgroundEffect className='opacity-30' />

      <div className='container relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>Meet Our Team</h2>
          <p className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
            Our talented team of experts is dedicated to delivering innovative integration solutions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
