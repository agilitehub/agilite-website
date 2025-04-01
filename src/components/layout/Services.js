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
    <div className="relative group transform transition-all duration-300 hover:-translate-y-2">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-agilite-red/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Middle glow layer */}
      <div className="absolute inset-0 bg-agilite-red/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 p-8 rounded-xl shadow-[0_4px_20px_rgba(227,6,19,0.15)] hover:shadow-[0_8px_40px_rgba(227,6,19,0.3)] transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-agilite-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-agilite-red/20 to-transparent -translate-x-10 -translate-y-10 rounded-full blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        
        {/* Content container */}
        <div className="relative">
          {/* Icon container with enhanced shadow */}
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-[0_4px_12px_rgba(227,6,19,0.2)] flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(227,6,19,0.35)]">
            <FontAwesomeIcon 
              icon={icon} 
              className="text-2xl text-agilite-red"
            />
          </div>
          
          <h3 className="text-xl font-bold text-agilite-red mb-4 transition-colors duration-300">{title}</h3>
          <p className="leading-relaxed bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 dark:from-gray-300 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent">{description}</p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-agilite-red/40 to-transparent transform transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        
        {/* Side accent line */}
        <div className="absolute top-1/2 -right-[2px] w-[2px] h-24 bg-gradient-to-b from-transparent via-agilite-red/40 to-transparent transform -translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
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