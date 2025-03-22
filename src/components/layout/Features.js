import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faBolt, 
  faLock, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import BackgroundEffect from '../ui/BackgroundEffect';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-agilite-red/5 to-agilite-slate/5 dark:from-agilite-red/10 dark:to-agilite-slate/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-agilite-red/10 dark:bg-agilite-red/20 rounded-full flex items-center justify-center mb-6">
          <FontAwesomeIcon icon={icon} className="h-8 w-8 text-agilite-red" />
        </div>
        <h3 className="text-xl font-bold text-agilite-slate dark:text-white mb-4">{title}</h3>
        <p className="text-agilite-slate/90 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: faCode,
      title: 'Low-Code Solution',
      description: 'Build complex integrations with minimal coding. Our visual interface makes it easy for business users to create powerful workflows.'
    },
    {
      icon: faBolt,
      title: 'Rapid Implementation',
      description: 'Deploy integrations in days, not months. Agilit-e\'s modular approach accelerates your path to digital transformation.'
    },
    {
      icon: faLock,
      title: 'Enterprise Security',
      description: 'Built with security in mind, featuring robust encryption, role-based access controls, and comprehensive audit logging.'
    },
    {
      icon: faChartLine,
      title: 'Scalable Architecture',
      description: 'Our microservices-based platform scales with your business needs, from small departments to enterprise-wide deployments.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <BackgroundEffect className="opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agilite-slate dark:text-white mb-4">
            Why Choose Agilit-e
          </h2>
          <p className="text-xl text-agilite-slate/90 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines power and simplicity to solve your most complex integration challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 