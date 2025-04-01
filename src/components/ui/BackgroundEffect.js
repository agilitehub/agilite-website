import React from 'react';

const BackgroundEffect = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Light mode dynamic elements */}
      <div className="absolute inset-0 block dark:hidden">
        {/* Main vibrant gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-agilite-red/[0.25] via-transparent to-agilite-red/[0.25]"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,agilite-red/[0.3]_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,agilite-red/[0.3]_0%,transparent_70%)] animate-float-delayed"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,agilite-red/[0.2]_1px,transparent_1px),linear-gradient(-45deg,agilite-red/[0.2]_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-agilite-red/[0.3] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-agilite-red/[0.3] via-transparent to-transparent"></div>
        
        {/* Center glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,agilite-red/[0.25]_0%,transparent_70%)] animate-pulse-slow"></div>
        
        {/* Additional accent elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,agilite-red/[0.2]_0%,transparent_70%)] animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,agilite-red/[0.2]_0%,transparent_70%)] animate-float-slow-delayed"></div>
      </div>
      
      {/* Dark mode dynamic elements */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Main vibrant gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-agilite-red/[0.25] via-transparent to-agilite-red/[0.25]"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,agilite-red/[0.3]_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,agilite-red/[0.3]_0%,transparent_70%)] animate-float-delayed"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,agilite-red/[0.2]_1px,transparent_1px),linear-gradient(-45deg,agilite-red/[0.2]_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-agilite-red/[0.3] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-agilite-red/[0.3] via-transparent to-transparent"></div>
        
        {/* Center glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,agilite-red/[0.25]_0%,transparent_70%)] animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default BackgroundEffect; 