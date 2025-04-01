import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faKey, 
  faHashtag, 
  faTags, 
  faLayerGroup,
  faPlug,
  faTable,
  faFileCode,
  faUserShield,
  faDiagramProject
} from '@fortawesome/free-solid-svg-icons';

const ModuleCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-agilite-red transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
      
      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-agilite-red to-agilite-red/60 dark:from-agilite-red/20 dark:to-agilite-black flex items-center justify-center mb-6 shadow-lg">
          <FontAwesomeIcon 
            icon={icon} 
            className="text-xl text-white dark:text-agilite-red"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-agilite-red transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
              <span className="text-agilite-red mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Modules = () => {
  const modules = [
    {
      icon: faKey,
      title: 'API Keys Module',
      description: 'Secure API key management and authentication for your integrations.',
      features: [
        'Configure API key profiles',
        'Generate secure API keys',
        'Manage key access and permissions',
        'Monitor key usage and analytics'
      ]
    },
    {
      icon: faHashtag,
      title: 'Numbering Module',
      description: 'Generate and manage sequential numbers with customizable formats.',
      features: [
        'Custom number formats',
        'Prefix and suffix support',
        'Minimum length configuration',
        'Increment-based numbering'
      ]
    },
    {
      icon: faTags,
      title: 'Keywords Module',
      description: 'Manage and process keywords for automated responses and workflows.',
      features: [
        'Keyword profile configuration',
        'Automated response handling',
        'Keyword validation',
        'Response template management'
      ]
    },
    {
      icon: faLayerGroup,
      title: 'Tier Structures Module',
      description: 'Create and manage hierarchical organizational structures.',
      features: [
        'Multi-level hierarchy support',
        'Dynamic structure management',
        'Role-based access control',
        'Structure validation'
      ]
    },
    {
      icon: faPlug,
      title: 'Connectors Module',
      description: 'Connect to external services and APIs with pre-built integrations.',
      features: [
        'Pre-built connector presets',
        'Custom connector configuration',
        'API integration support',
        'Connection monitoring'
      ]
    },
    {
      icon: faTable,
      title: 'Data Mapping Module',
      description: 'Transform data between different formats and structures.',
      features: [
        'JSON to Excel mapping',
        'Excel to JSON mapping',
        'JSON to JSON mapping',
        'Custom mapping rules'
      ]
    },
    {
      icon: faFileCode,
      title: 'Templates Module',
      description: 'Create and manage reusable document and message templates.',
      features: [
        'Template creation and editing',
        'Variable substitution',
        'Template versioning',
        'Template validation'
      ]
    },
    {
      icon: faUserShield,
      title: 'Roles Module',
      description: 'Manage user roles and permissions across your system.',
      features: [
        'Role-based access control',
        'Permission management',
        'User role assignment',
        'Access auditing'
      ]
    },
    {
      icon: faDiagramProject,
      title: 'BPM Module',
      description: 'Design and execute business process management workflows.',
      features: [
        'Workflow design',
        'Process automation',
        'Task management',
        'Process monitoring'
      ]
    }
  ];

  return (
    <section id="modules" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Agilit-e Modules</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive suite of modules designed to handle every aspect of your integration needs. Each module is built with performance, security, and scalability in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <ModuleCard 
              key={index}
              icon={module.icon}
              title={module.title}
              description={module.description}
              features={module.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules; 