import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faGears, 
  faCircleNodes,
  faNetworkWired,
  faShieldAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <div className="relative group transform transition-transform duration-300 hover:-translate-y-2">
      {/* Background gradient with optimized animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl transform transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-agilite-red to-red-700 dark:from-agilite-red dark:to-red-800 p-8 rounded-xl border border-red-400/20 dark:border-red-500/20 overflow-hidden shadow-lg">
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent -translate-x-8 -translate-y-8 rounded-full blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        
        {/* Content container */}
        <div className="relative">
          {/* Icon container */}
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
            <FontAwesomeIcon 
              icon={icon} 
              className="text-2xl text-white"
            />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">{title}</h3>
          <p className="text-red-100/90 leading-relaxed">{description}</p>
        </div>

        {/* Bottom highlight */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        
        {/* Side accent */}
        <div className="absolute top-1/2 -right-1 w-2 h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: faCircleNodes,
      title: 'Integration Platform',
      description: 'A microservice-first platform that centralizes all your integration needs. Access and manage all configurations through a unified API.'
    },
    {
      icon: faNetworkWired,
      title: 'Node-RED Integration',
      description: 'Seamlessly integrate with Node-RED for flow-based programming. Chain multiple services and create dynamic workflows with ease.'
    },
    {
      icon: faShieldAlt,
      title: 'Enterprise Security',
      description: 'Built with security-first approach, featuring robust encryption, role-based access controls, and comprehensive audit logging.'
    },
    {
      icon: faCode,
      title: 'API-First Design',
      description: 'Access all features through well-documented REST APIs. Our microservices architecture ensures flexible, scalable integrations.'
    },
    {
      icon: faGears,
      title: 'Comprehensive Modules',
      description: 'From API Keys to BPM, our modular architecture provides a complete suite of tools for every integration need.'
    },
    {
      icon: faRocket,
      title: 'Rapid Implementation',
      description: 'Deploy integrations in days, not months. Our platform accelerates your path to digital transformation with minimal coding required.'
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Agilit-e provides a comprehensive suite of integration services designed by developers, for developers. Our platform combines power and simplicity to solve your most complex integration challenges.
          </p>
          <a 
            href="#modules" 
            className="inline-block mt-6 text-agilite-red hover:text-red-700 font-semibold transition-colors duration-300"
          >
            Explore Our Modules →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default Services;