import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faGears,
  faCircleNodes,
  faNetworkWired,
  faShieldAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

// Network nodes decoration component
const NetworkNodes = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-30'>
      {/* Nodes and connections */}
      <svg className='absolute w-full h-full' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
        {/* Connection lines */}
        <g stroke='#E30613' strokeWidth='1.5' strokeOpacity='0.5'>
          {/* Top left cluster */}
          <line x1='200' y1='150' x2='350' y2='220' />
          <line x1='350' y1='220' x2='450' y2='150' />
          <line x1='450' y1='150' x2='650' y2='220' />
          <line x1='650' y1='220' x2='800' y2='180' />
          <line x1='800' y1='180' x2='900' y2='250' />
          <line x1='900' y1='250' x2='800' y2='350' />
          <line x1='800' y1='350' x2='650' y2='400' />
          <line x1='650' y1='400' x2='500' y2='350' />
          <line x1='500' y1='350' x2='350' y2='400' />
          <line x1='350' y1='400' x2='200' y2='350' />
          <line x1='200' y1='350' x2='100' y2='250' />
          <line x1='100' y1='250' x2='200' y2='150' />

          {/* Bottom cluster */}
          <line x1='200' y1='550' x2='350' y2='620' />
          <line x1='350' y1='620' x2='450' y2='550' />
          <line x1='450' y1='550' x2='650' y2='620' />
          <line x1='650' y1='620' x2='800' y2='580' />
          <line x1='800' y1='580' x2='900' y2='650' />
          <line x1='900' y1='650' x2='800' y2='750' />
          <line x1='800' y1='750' x2='650' y2='800' />
          <line x1='650' y1='800' x2='500' y2='750' />
          <line x1='500' y1='750' x2='350' y2='800' />
          <line x1='350' y1='800' x2='200' y2='750' />
          <line x1='200' y1='750' x2='100' y2='650' />
          <line x1='100' y1='650' x2='200' y2='550' />

          {/* Cross-connections */}
          <line x1='200' y1='150' x2='200' y2='550' strokeDasharray='5,5' />
          <line x1='450' y1='150' x2='450' y2='550' strokeDasharray='5,5' />
          <line x1='800' y1='180' x2='800' y2='580' strokeDasharray='5,5' />
          <line x1='100' y1='250' x2='100' y2='650' strokeDasharray='5,5' />
          <line x1='900' y1='250' x2='900' y2='650' strokeDasharray='5,5' />

          {/* Far right micro cluster */}
          <line x1='950' y1='300' x2='980' y2='320' />
          <line x1='980' y1='320' x2='990' y2='350' />
          <line x1='990' y1='350' x2='970' y2='380' />
          <line x1='970' y1='380' x2='940' y2='370' />
          <line x1='940' y1='370' x2='930' y2='330' />
          <line x1='930' y1='330' x2='950' y2='300' />

          {/* Left side floating cluster */}
          <line x1='50' y1='400' x2='70' y2='430' />
          <line x1='70' y1='430' x2='40' y2='460' />
          <line x1='40' y1='460' x2='10' y2='440' />
          <line x1='10' y1='440' x2='20' y2='410' />
          <line x1='20' y1='410' x2='50' y2='400' />

          {/* Mid right cluster */}
          <line x1='700' y1='500' x2='730' y2='485' />
          <line x1='730' y1='485' x2='760' y2='500' />
          <line x1='760' y1='500' x2='750' y2='530' />
          <line x1='750' y1='530' x2='720' y2='535' />
          <line x1='720' y1='535' x2='700' y2='500' />
        </g>

        {/* Nodes */}
        <g fill='#E30613' fillOpacity='0.7'>
          {/* Top left cluster */}
          <circle cx='200' cy='150' r='6' />
          <circle cx='350' cy='220' r='6' />
          <circle cx='450' cy='150' r='6' />
          <circle cx='650' cy='220' r='6' />
          <circle cx='800' cy='180' r='6' />
          <circle cx='900' cy='250' r='6' />
          <circle cx='800' cy='350' r='6' />
          <circle cx='650' cy='400' r='6' />
          <circle cx='500' cy='350' r='6' />
          <circle cx='350' cy='400' r='6' />
          <circle cx='200' cy='350' r='6' />
          <circle cx='100' cy='250' r='6' />

          {/* Bottom cluster */}
          <circle cx='200' cy='550' r='6' />
          <circle cx='350' cy='620' r='6' />
          <circle cx='450' cy='550' r='6' />
          <circle cx='650' cy='620' r='6' />
          <circle cx='800' cy='580' r='6' />
          <circle cx='900' cy='650' r='6' />
          <circle cx='800' cy='750' r='6' />
          <circle cx='650' cy='800' r='6' />
          <circle cx='500' cy='750' r='6' />
          <circle cx='350' cy='800' r='6' />
          <circle cx='200' cy='750' r='6' />
          <circle cx='100' cy='650' r='6' />

          {/* Far right micro cluster */}
          <circle cx='950' cy='300' r='3' />
          <circle cx='980' cy='320' r='3' />
          <circle cx='990' cy='350' r='3' />
          <circle cx='970' cy='380' r='3' />
          <circle cx='940' cy='370' r='3' />
          <circle cx='930' cy='330' r='3' />

          {/* Left side floating cluster */}
          <circle cx='50' cy='400' r='4' />
          <circle cx='70' cy='430' r='4' />
          <circle cx='40' cy='460' r='4' />
          <circle cx='10' cy='440' r='4' />
          <circle cx='20' cy='410' r='4' />

          {/* Mid right cluster */}
          <circle cx='700' cy='500' r='4' />
          <circle cx='730' cy='485' r='4' />
          <circle cx='760' cy='500' r='4' />
          <circle cx='750' cy='530' r='4' />
          <circle cx='720' cy='535' r='4' />
        </g>

        {/* Central nodes (larger) */}
        <g fill='#E30613'>
          <circle cx='500' cy='350' r='8' />
          <circle cx='500' cy='750' r='8' />
          <circle cx='960' cy='340' r='5' />
          <circle cx='35' cy='430' r='5' />
          <circle cx='730' cy='510' r='5' />
        </g>

        {/* White/lighter nodes for contrast */}
        <g fill='#FFFFFF' fillOpacity='0.6'>
          <circle cx='400' cy='300' r='3' />
          <circle cx='600' cy='250' r='4' />
          <circle cx='750' cy='300' r='3' />
          <circle cx='400' cy='700' r='4' />
          <circle cx='600' cy='650' r='3' />
          <circle cx='750' cy='680' r='4' />
          <circle cx='30' cy='500' r='2' />
          <circle cx='980' cy='400' r='2' />
          <circle cx='740' cy='470' r='3' />
        </g>
      </svg>

      {/* Floating particles */}
      <div className='absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-agilite-red/40 animate-float'></div>
      <div className='absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-agilite-red/60 animate-float-slow'></div>
      <div className='absolute top-2/4 right-1/4 w-2 h-2 rounded-full bg-agilite-red/50 animate-float-reverse'></div>
      <div className='absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-agilite-red/30 animate-pulse'></div>

      {/* Additional floating particles */}
      <div className='absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/70 animate-pulse-slower'></div>
      <div className='absolute bottom-2/5 left-1/5 w-3 h-3 rounded-full bg-white/60 animate-float-slow'></div>
      <div className='absolute top-3/5 right-1/4 w-1 h-1 rounded-full bg-agilite-red/80 animate-ping'></div>
      <div className='absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-white/50 animate-float-reverse'></div>
    </div>
  )
}

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <div className='relative group transform transition-transform duration-300 hover:-translate-y-2'>
      {/* Background gradient with optimized animation */}
      <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl transform transition-opacity duration-300 group-hover:opacity-100 opacity-0'></div>

      {/* Main card */}
      <div className='relative bg-gradient-to-br from-agilite-red to-red-700 dark:from-agilite-red dark:to-red-800 p-8 rounded-xl border border-red-400/20 dark:border-red-500/20 overflow-hidden shadow-lg'>
        {/* Animated corner accent */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent -translate-x-8 -translate-y-8 rounded-full blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100'></div>

        {/* Content container */}
        <div className='relative'>
          {/* Icon container */}
          <div className='w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20'>
            <FontAwesomeIcon icon={icon} className='text-2xl text-white' />
          </div>

          <h3 className='text-xl font-bold text-white mb-4 transition-colors duration-300'>{title}</h3>
          <p className='text-red-100/90 leading-relaxed'>{description}</p>
        </div>

        {/* Bottom highlight */}
        <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform transition-all duration-300 opacity-0 group-hover:opacity-100'></div>

        {/* Side accent */}
        <div className='absolute top-1/2 -right-1 w-2 h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100'></div>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: faCircleNodes,
      title: 'Integration Platform',
      description:
        'A microservice-first platform that centralizes all your integration needs. Access and manage all configurations through a unified API.'
    },
    {
      icon: faNetworkWired,
      title: 'Node-RED Integration',
      description:
        'Seamlessly integrate with Node-RED for flow-based programming. Chain multiple services and create dynamic workflows with ease.'
    },
    {
      icon: faShieldAlt,
      title: 'Enterprise Security',
      description:
        'Built with security-first approach, featuring robust encryption, role-based access controls, and comprehensive audit logging.'
    },
    {
      icon: faCode,
      title: 'API-First Design',
      description:
        'Access all features through well-documented REST APIs. Our microservices architecture ensures flexible, scalable integrations.'
    },
    {
      icon: faGears,
      title: 'Comprehensive Modules',
      description:
        'From API Keys to BPM, our modular architecture provides a complete suite of tools for every integration need.'
    },
    {
      icon: faRocket,
      title: 'Rapid Implementation',
      description:
        'Deploy integrations in days, not months. Our platform accelerates your path to digital transformation with minimal coding required.'
    }
  ]

  return (
    <section
      id='services'
      className='relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
    >
      {/* Add the network nodes decoration */}
      <NetworkNodes />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>Our Services</h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Agilit<span className='text-agilite-red'>-e</span> provides a comprehensive suite of integration services
            designed by developers, for developers. Our platform combines power and simplicity to solve your most
            complex integration challenges.
          </p>
          <a
            href='#modules'
            className='inline-block mt-6 text-agilite-red hover:text-red-700 font-semibold transition-colors duration-300'
          >
            Explore Our Modules →
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
