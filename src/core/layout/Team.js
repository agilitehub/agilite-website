import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import BackgroundEffect from '../ui/BackgroundEffect'

const TeamMember = ({ name, role, image, socials, bio }) => {
  return (
    <div className='group flex h-full flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800'>
      <div className='relative w-full aspect-square overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
        />
        <div className='pointer-events-none absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-agilite-red/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100'>
          <div className='mb-6 flex space-x-4'>
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${name} on LinkedIn`}
                className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white transition-colors hover:text-gray-200'
              >
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' aria-hidden />
              </a>
            )}
            {socials.facebook && (
              <a
                href={socials.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${name} on Facebook`}
                className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white transition-colors hover:text-gray-200'
              >
                <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' aria-hidden />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${name} on X`}
                className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white transition-colors hover:text-gray-200'
              >
                <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' aria-hidden />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${name} on GitHub`}
                className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white transition-colors hover:text-gray-200'
              >
                <FontAwesomeIcon icon={faGithub} className='h-6 w-6' aria-hidden />
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
      bio: 'As the CEO of Agilit-e, John is constantly researching and mastering cutting edge integration technologies to help businesses connect their systems and streamline operations.',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johnjardin/',
        facebook: 'https://www.facebook.com/john.v.jardin'
      }
    },
    {
      name: 'Dawid van Heerden',
      role: 'Partner',
      image: '/images/team/dawid-placeholder.jpg',
      bio: 'Dawid brings extensive expertise in system integration and business process optimization to Agilit-e, working closely with clients to deliver tailored solutions.',
      socials: {
        linkedin: 'https://www.linkedin.com/in/dawid-vanheerden/',
        facebook: 'https://www.facebook.com/dawid.van.heerden'
      }
    },
    {
      name: 'Armand Smit',
      role: 'Senior Software Developer',
      image: '/images/team/armand-placeholder.jpg',
      bio: 'With deep technical knowledge and years of experience, Armand specializes in creating robust solutions that meet complex business requirements and technical challenges.',
      socials: {
        linkedin: 'https://www.linkedin.com/in/arriesmit/',
        facebook: 'https://www.facebook.com/armand.smit.733'
      }
    },
    {
      name: 'Marianne Smith',
      role: 'User Interface Coordinator',
      image: '/images/team/marianne-placeholder.jpg',
      bio: 'Marianne coordinates user interface design across Agilit-e products, ensuring polished, accessible experiences that align with client and brand requirements.',
      socials: {
        linkedin: 'https://www.linkedin.com/in/marianne-smith-200580198/',
        facebook: 'https://www.facebook.com/marianne.smith.355'
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

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto'>
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
