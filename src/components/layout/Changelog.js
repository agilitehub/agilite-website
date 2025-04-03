import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCodeBranch,
  faBug,
  faPlus,
  faWrench,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const ChangelogEntry = ({ version, date, changes }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'feature':
        return faPlus;
      case 'fix':
        return faBug;
      case 'improvement':
        return faWrench;
      case 'security':
        return faShieldAlt;
      default:
        return faCodeBranch;
    }
  };

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Version line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-agilite-red/20 dark:bg-agilite-red/30"></div>
      
      {/* Version dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-agilite-red transform -translate-x-1/2"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Version {version}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
        </div>
        
        <div className="space-y-4">
          {changes.map((change, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-agilite-red/10 dark:bg-agilite-red/20 flex items-center justify-center mr-3 mt-1">
                <FontAwesomeIcon 
                  icon={getIcon(change.type)} 
                  className="text-agilite-red text-sm"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  {change.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {change.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Changelog = () => {
  const changelog = [
    {
      version: '7.0.0',
      date: 'March 2024',
      changes: [
        {
          type: 'feature',
          title: 'New BPM Module',
          description: 'Introducing our Business Process Management module for workflow automation and process optimization.'
        },
        {
          type: 'improvement',
          title: 'Enhanced API Performance',
          description: 'Significant improvements to API response times and overall system performance.'
        },
        {
          type: 'security',
          title: 'Security Enhancements',
          description: 'Added new security features including enhanced encryption and improved access controls.'
        }
      ]
    },
    {
      version: '6.0.0',
      date: 'December 2023',
      changes: [
        {
          type: 'feature',
          title: 'Node-RED Integration',
          description: 'Added seamless integration with Node-RED for flow-based programming capabilities.'
        },
        {
          type: 'improvement',
          title: 'UI/UX Updates',
          description: 'Major improvements to the user interface and overall user experience.'
        }
      ]
    },
    {
      version: '5.0.0',
      date: 'September 2023',
      changes: [
        {
          type: 'feature',
          title: 'Data Mapping Module',
          description: 'New module for transforming data between different formats and structures.'
        },
        {
          type: 'fix',
          title: 'Bug Fixes',
          description: 'Various bug fixes and stability improvements across all modules.'
        }
      ]
    }
  ];

  return (
    <section id="changelog" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Changelog</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest improvements, features, and fixes in Agilit<span className="text-agilite-red">-e</span>.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {changelog.map((entry, index) => (
            <ChangelogEntry 
              key={index}
              version={entry.version}
              date={entry.date}
              changes={entry.changes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Changelog; 