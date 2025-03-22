import React from 'react';

const BackgroundEffect = ({ className = "" }) => {
  // Create a clean, solid background with no particles or floating elements
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Clean background - no particles, no floating elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
    </div>
  );
};

export default BackgroundEffect; 