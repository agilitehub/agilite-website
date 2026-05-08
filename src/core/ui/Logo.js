import React from 'react'

const Logo = ({
  className = '',
  textColor = 'text-agilite-slate',
  showText = true,
  variant = 'color', // 'color' or 'grayscale'
  size = 'medium', // 'small', 'medium', 'large'
  style = 'default' // 'default', 'accent-e', 'accent-ae'
}) => {
  // Colors based on variant
  const nodeColor = variant === 'color' ? '#E30613' : '#4A545E'
  const centerNodeColor = '#4A545E'
  const lineColor = variant === 'color' ? '#E30613' : '#4A545E'

  // Size mapping
  const sizeMap = {
    small: 'h-10 w-10',
    medium: 'h-16 w-16',
    large: 'h-24 w-24'
  }

  const logoSize = sizeMap[size] || sizeMap.medium

  // Determine which style to use (defaulting to 'accent-e')
  const logoStyle = style || 'accent-e'

  return (
    <div className={`flex items-center ${className}`}>
      {/* 3D Network nodes logo */}
      <div className={`relative ${logoSize} mr-8`} aria-hidden='true'>
        {/* Shadow effect */}
        <div className='absolute bottom-[-8px] left-1/4 w-1/2 h-[3px] bg-gray-300/50 dark:bg-gray-700/50 rounded-full blur-sm'></div>

        {/* SVG logo */}
        <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          {/* Connection lines */}
          <g strokeWidth='2' stroke={lineColor} strokeOpacity='0.8'>
            <line x1='50' y1='50' x2='30' y2='20' />
            <line x1='50' y1='50' x2='20' y2='30' />
            <line x1='50' y1='50' x2='15' y2='50' />
            <line x1='50' y1='50' x2='20' y2='70' />
            <line x1='50' y1='50' x2='30' y2='80' />
            <line x1='50' y1='50' x2='50' y2='85' />
            <line x1='50' y1='50' x2='70' y2='80' />
            <line x1='50' y1='50' x2='80' y2='70' />
            <line x1='50' y1='50' x2='85' y2='50' />
            <line x1='50' y1='50' x2='80' y2='30' />
            <line x1='50' y1='50' x2='70' y2='20' />
            <line x1='50' y1='50' x2='50' y2='15' />
          </g>

          {/* Red nodes */}
          <g fill={nodeColor}>
            <circle cx='30' cy='20' r='5' />
            <circle cx='20' cy='30' r='5' />
            <circle cx='15' cy='50' r='5' />
            <circle cx='20' cy='70' r='5' />
            <circle cx='30' cy='80' r='5' />
            <circle cx='50' cy='85' r='5' />
            <circle cx='70' cy='80' r='5' />
            <circle cx='80' cy='70' r='5' />
            <circle cx='85' cy='50' r='5' />
            <circle cx='80' cy='30' r='5' />
            <circle cx='70' cy='20' r='5' />
            <circle cx='50' cy='15' r='5' />
          </g>

          {/* Gray center node */}
          <circle cx='50' cy='50' r='7' fill={centerNodeColor} />
        </svg>
      </div>

      {/* Agilit-e text */}
      {showText && (
        <div
          className={`text-3xl font-normal tracking-wider whitespace-nowrap`}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {logoStyle === 'default' && <span className={`${textColor} dark:text-white`}>AGILIT-E</span>}

          {logoStyle === 'accent-e' && (
            <>
              <span className={`${textColor} dark:text-white`}>AGILIT</span>
              <span className='text-agilite-red'>-E</span>
            </>
          )}

          {logoStyle === 'accent-ae' && (
            <>
              <span className='text-agilite-red'>A</span>
              <span className={`${textColor} dark:text-white`}>GILIT</span>
              <span className='text-agilite-red'>-E</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo
