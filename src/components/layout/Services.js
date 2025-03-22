import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faCloudArrowUp, 
  faGears, 
  faArrowsToCircle,
  faCircleNodes,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
      {/* Curved accent in corner */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-agilite-red/70 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
      
      {/* Bottom wave pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-agilite-red/30 via-agilite-red to-agilite-red/30 rounded-full"></div>
      
      <div className="relative">
        {/* Icon with dynamic styling */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-agilite-red to-agilite-red/60 dark:from-agilite-red/20 dark:to-agilite-black flex items-center justify-center mb-6 shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300">
          <FontAwesomeIcon 
            icon={icon} 
            className="text-xl text-white dark:text-agilite-red"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-agilite-red transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      
      {/* Hidden circular accent that appears on hover */}
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-agilite-red/10 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100"></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: faCircleNodes,
      title: 'Integration Platform',
      description: 'Connect systems, applications, and data sources. Simplify complex interactions and automate business processes.'
    },
    {
      icon: faCode,
      title: 'API Development',
      description: 'Create robust, scalable APIs that connect your business systems and enable seamless data exchange.'
    },
    {
      icon: faCloudArrowUp,
      title: 'Cloud Solutions',
      description: 'Leverage cloud technologies for enhanced performance, scalability, and cost-efficiency in your business.'
    },
    {
      icon: faNetworkWired,
      title: 'Middleware Development',
      description: 'Custom middleware solutions to bridge legacy systems with modern applications for seamless operations.'
    },
    {
      icon: faGears,
      title: 'System Integration',
      description: 'Connect disparate systems to enable smooth data flow and unified business processes across your organization.'
    },
    {
      icon: faArrowsToCircle,
      title: 'Digital Transformation',
      description: "Guide your organization's transition to digital business models and technology-driven operations."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Agilit-e provides integration services that connect your business systems and streamline operations.
          </p>
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