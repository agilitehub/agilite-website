import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket,
  faClock,
  faCheck,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const RoadmapItem = ({ status, title, description, timeline }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return faCheck;
      case 'in-progress':
        return faSpinner;
      case 'planned':
        return faClock;
      default:
        return faRocket;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-agilite-red';
      case 'planned':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Status dot */}
      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${getStatusColor()} transform -translate-x-1/2`}>
        <FontAwesomeIcon 
          icon={getStatusIcon()} 
          className="text-white text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">{timeline}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const roadmap = [
    {
      status: 'completed',
      title: 'Enhanced Security Features',
      description: 'Implementation of advanced security measures including enhanced encryption and improved access controls.',
      timeline: 'Q1 2024'
    },
    {
      status: 'in-progress',
      title: 'Advanced Analytics Dashboard',
      description: 'New dashboard providing detailed insights into system performance, usage patterns, and integration metrics.',
      timeline: 'Q2 2024'
    },
    {
      status: 'planned',
      title: 'AI-Powered Integration Assistant',
      description: 'Intelligent system that helps users create and optimize integrations using natural language processing.',
      timeline: 'Q3 2024'
    },
    {
      status: 'planned',
      title: 'Extended API Capabilities',
      description: 'Expanded API functionality with support for GraphQL, WebSocket connections, and real-time data streaming.',
      timeline: 'Q4 2024'
    },
    {
      status: 'planned',
      title: 'Enhanced Node-RED Integration',
      description: 'Additional Node-RED nodes and improved integration capabilities for more complex workflow scenarios.',
      timeline: 'Q1 2025'
    },
    {
      status: 'planned',
      title: 'Mobile Application',
      description: 'Native mobile app for monitoring and managing integrations on the go.',
      timeline: 'Q2 2025'
    }
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Product Roadmap</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our vision for the future of Agilit-e. We're constantly working on new features and improvements to make your integration experience even better.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {roadmap.map((item, index) => (
            <RoadmapItem 
              key={index}
              status={item.status}
              title={item.title}
              description={item.description}
              timeline={item.timeline}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

 