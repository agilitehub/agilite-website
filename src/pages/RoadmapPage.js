import React from 'react';
import Roadmap from '../components/layout/Roadmap';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const RoadmapPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Bold, eye-catching background */}
        <div className="absolute inset-0">
          {/* Striking color gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-white to-agilite-red/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          
          {/* Diagonal accent line */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 h-full w-2/3 bg-agilite-red/10 dark:bg-agilite-red/20 transform skew-x-12 translate-x-1/4"></div>
          </div>
          
          {/* Bold corner accent */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-agilite-red/20 to-transparent dark:from-agilite-red/30 dark:to-transparent"></div>
          
          {/* Sharp geometric accent - light mode only */}
          <div className="absolute top-1/4 right-0 w-3/4 h-1 bg-agilite-red/30 dark:bg-transparent"></div>
          <div className="absolute top-1/4 right-0 w-1 h-32 bg-agilite-red/30 dark:bg-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <Roadmap />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RoadmapPage; 