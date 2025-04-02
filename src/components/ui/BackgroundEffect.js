import React from 'react';

const BackgroundEffect = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Light mode bold geometric elements */}
      <div className="absolute inset-0 block dark:hidden">
        {/* Accent color sections */}
        <div className="absolute inset-0">
          {/* Diagonal color sections */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agilite-red/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-agilite-red/15 via-transparent to-transparent"></div>
          
          {/* Bold geometric grid - inspired by network connections */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(227,6,19,0.15)_1px,transparent_1px),linear-gradient(135deg,rgba(227,6,19,0.15)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        </div>
        
        {/* Large floating network node clusters */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] animate-float-slow">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center */}
            <circle cx="100" cy="100" r="15" fill="#4A545E" fillOpacity="0.5" />
            
            {/* Connected nodes */}
            <circle cx="50" cy="50" r="10" fill="#E30613" fillOpacity="0.4" />
            <circle cx="150" cy="50" r="10" fill="#E30613" fillOpacity="0.4" />
            <circle cx="50" cy="150" r="10" fill="#E30613" fillOpacity="0.4" />
            <circle cx="150" cy="150" r="10" fill="#E30613" fillOpacity="0.4" />
            
            {/* Connection lines */}
            <line x1="100" y1="100" x2="50" y2="50" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="150" y2="50" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="50" y2="150" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="150" y2="150" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Secondary nodes */}
            <circle cx="20" cy="100" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="180" cy="100" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="100" cy="20" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="100" cy="180" r="8" fill="#E30613" fillOpacity="0.4" />
            
            {/* Secondary connection lines */}
            <line x1="100" y1="100" x2="20" y2="100" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="180" y2="100" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="100" y2="20" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="100" y2="180" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] animate-float-3">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center */}
            <circle cx="100" cy="100" r="12" fill="#4A545E" fillOpacity="0.5" />
            
            {/* Connected nodes */}
            <circle cx="60" cy="60" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="140" cy="60" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="60" cy="140" r="8" fill="#E30613" fillOpacity="0.4" />
            <circle cx="140" cy="140" r="8" fill="#E30613" fillOpacity="0.4" />
            
            {/* Connection lines */}
            <line x1="100" y1="100" x2="60" y2="60" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="140" y2="60" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="60" y2="140" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="140" y2="140" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.3" />
          </svg>
        </div>
        
        {/* Dynamic animated orbs with pulse */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-agilite-red/30 blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-agilite-red/25 blur-lg animate-pulse-slower"></div>
        
        {/* Bold polygon elements */}
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] animate-float-2 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#E30613" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] animate-float-1 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="#E30613" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Vibrant animated particles */}
        <div className="absolute top-[20%] left-[30%] w-6 h-6 rounded-full bg-agilite-red/25 animate-float-particle"></div>
        <div className="absolute top-[60%] left-[15%] w-4 h-4 rounded-full bg-agilite-red/30 animate-float-particle"></div>
        <div className="absolute top-[80%] left-[50%] w-8 h-8 rounded-full bg-agilite-red/20 animate-float-particle"></div>
        <div className="absolute top-[40%] left-[80%] w-5 h-5 rounded-full bg-agilite-red/30 animate-float-particle"></div>
        
        {/* Additional white/light particles for contrast */}
        <div className="absolute top-[15%] left-[70%] w-5 h-5 rounded-full bg-white/30 animate-float-particle"></div>
        <div className="absolute top-[70%] left-[25%] w-7 h-7 rounded-full bg-white/25 animate-float-particle"></div>
        <div className="absolute top-[30%] left-[55%] w-4 h-4 rounded-full bg-white/20 animate-float-particle"></div>
        <div className="absolute top-[55%] right-[15%] w-6 h-6 rounded-full bg-white/30 animate-float-particle"></div>
        
        {/* Additional node clusters in previously empty areas */}
        <div className="absolute top-[70%] right-[20%] w-[300px] h-[300px] animate-float-2">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center - matches logo style */}
            <circle cx="100" cy="100" r="10" fill="#4A545E" fillOpacity="0.55" />
            
            {/* Connected nodes - exact logo pattern */}
            <circle cx="100" cy="30" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="130" cy="40" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="150" cy="70" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="150" cy="100" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="150" cy="130" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="130" cy="160" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="100" cy="170" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="70" cy="160" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="50" cy="130" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="50" cy="100" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="50" cy="70" r="6" fill="#E30613" fillOpacity="0.4" />
            <circle cx="70" cy="40" r="6" fill="#E30613" fillOpacity="0.4" />
            
            {/* Connection lines - matches logo pattern */}
            <line x1="100" y1="100" x2="100" y2="30" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="130" y2="40" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="150" y2="70" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="150" y2="100" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="150" y2="130" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="130" y2="160" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="100" y2="170" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="70" y2="160" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="50" y2="130" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="50" y2="100" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="50" y2="70" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
            <line x1="100" y1="100" x2="70" y2="40" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.35" />
          </svg>
        </div>
        
        <div className="absolute top-[20%] left-[15%] w-[250px] h-[250px] animate-float-3">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center - matches logo style */}
            <circle cx="100" cy="100" r="8" fill="#4A545E" fillOpacity="0.4" />
            
            {/* Connected nodes - exact logo pattern but smaller */}
            <circle cx="100" cy="40" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="125" cy="48" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="140" cy="75" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="140" cy="100" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="140" cy="125" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="125" cy="152" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="100" cy="160" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="75" cy="152" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="60" cy="125" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="60" cy="100" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="60" cy="75" r="4" fill="#E30613" fillOpacity="0.35" />
            <circle cx="75" cy="48" r="4" fill="#E30613" fillOpacity="0.35" />
            
            {/* Connection lines - matches logo pattern */}
            <line x1="100" y1="100" x2="100" y2="40" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="125" y2="48" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="140" y2="75" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="140" y2="100" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="140" y2="125" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="125" y2="152" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="100" y2="160" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="75" y2="152" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="60" y2="125" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="60" y2="100" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="60" y2="75" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="100" y1="100" x2="75" y2="48" stroke="#E30613" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        </div>
        
        {/* Large central node cluster - based on the logo's network structure */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
          {/* Center node with pulsing effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-agilite-slate/70 animate-slow-pulse">
            {/* Ring glow effect */}
            <div className="absolute inset-0 rounded-full animate-ping-slow bg-agilite-slate/20"></div>
          </div>
          
          {/* Nodes exactly matching logo pattern */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-[20%] left-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-[35%] left-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute bottom-[35%] left-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute bottom-[20%] left-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute bottom-[20%] right-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute bottom-[35%] right-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-[35%] right-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          <div className="absolute top-[20%] right-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/60 animate-float-small"></div>
          
          {/* Connection lines - animated with gradients */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E30613" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E30613" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Connections matching logo pattern */}
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="15%" y2="65%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="85%" y2="65%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="85%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
          </svg>
        </div>
      </div>
      
      {/* Dark mode bold geometric elements */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Accent color sections */}
        <div className="absolute inset-0">
          {/* Diagonal color sections */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agilite-red/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-agilite-red/25 via-transparent to-transparent"></div>
          
          {/* Bold geometric grid - inspired by network connections */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(227,6,19,0.25)_1px,transparent_1px),linear-gradient(135deg,rgba(227,6,19,0.25)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        </div>
        
        {/* Large floating network node clusters */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] animate-float-slow">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center */}
            <circle cx="100" cy="100" r="15" fill="#6B7280" fillOpacity="0.7" />
            
            {/* Connected nodes */}
            <circle cx="50" cy="50" r="10" fill="#E30613" fillOpacity="0.6" />
            <circle cx="150" cy="50" r="10" fill="#E30613" fillOpacity="0.6" />
            <circle cx="50" cy="150" r="10" fill="#E30613" fillOpacity="0.6" />
            <circle cx="150" cy="150" r="10" fill="#E30613" fillOpacity="0.6" />
            
            {/* Connection lines */}
            <line x1="100" y1="100" x2="50" y2="50" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="150" y2="50" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="50" y2="150" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="150" y2="150" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            
            {/* Secondary nodes */}
            <circle cx="20" cy="100" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="180" cy="100" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="100" cy="20" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="100" cy="180" r="8" fill="#E30613" fillOpacity="0.6" />
            
            {/* Secondary connection lines */}
            <line x1="100" y1="100" x2="20" y2="100" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="180" y2="100" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="20" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="180" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] animate-float-3">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center */}
            <circle cx="100" cy="100" r="12" fill="#6B7280" fillOpacity="0.7" />
            
            {/* Connected nodes */}
            <circle cx="60" cy="60" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="140" cy="60" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="60" cy="140" r="8" fill="#E30613" fillOpacity="0.6" />
            <circle cx="140" cy="140" r="8" fill="#E30613" fillOpacity="0.6" />
            
            {/* Connection lines */}
            <line x1="100" y1="100" x2="60" y2="60" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="140" y2="60" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="60" y2="140" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="140" y2="140" stroke="#E30613" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
        </div>
        
        {/* Dynamic animated orbs with pulse */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-agilite-red/40 blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-agilite-red/35 blur-lg animate-pulse-slower"></div>
        
        {/* Bold polygon elements */}
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] animate-float-2 opacity-60">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#E30613" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] animate-float-1 opacity-60">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="#E30613" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Vibrant animated particles */}
        <div className="absolute top-[20%] left-[30%] w-6 h-6 rounded-full bg-agilite-red/35 animate-float-particle"></div>
        <div className="absolute top-[60%] left-[15%] w-4 h-4 rounded-full bg-agilite-red/40 animate-float-particle"></div>
        <div className="absolute top-[80%] left-[50%] w-8 h-8 rounded-full bg-agilite-red/30 animate-float-particle"></div>
        <div className="absolute top-[40%] left-[80%] w-5 h-5 rounded-full bg-agilite-red/40 animate-float-particle"></div>
        
        {/* Additional white/light particles for contrast in dark mode */}
        <div className="absolute top-[15%] left-[70%] w-5 h-5 rounded-full bg-white/40 animate-float-particle"></div>
        <div className="absolute top-[70%] left-[25%] w-7 h-7 rounded-full bg-white/35 animate-float-particle"></div>
        <div className="absolute top-[30%] left-[55%] w-4 h-4 rounded-full bg-white/30 animate-float-particle"></div>
        <div className="absolute top-[55%] right-[15%] w-6 h-6 rounded-full bg-white/40 animate-float-particle"></div>
        
        {/* Additional node clusters in previously empty areas - dark mode */}
        <div className="absolute top-[70%] right-[20%] w-[300px] h-[300px] animate-float-2">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center - matches logo style */}
            <circle cx="100" cy="100" r="10" fill="#6B7280" fillOpacity="0.7" />
            
            {/* Connected nodes - exact logo pattern */}
            <circle cx="100" cy="30" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="130" cy="40" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="150" cy="70" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="150" cy="100" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="150" cy="130" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="130" cy="160" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="100" cy="170" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="70" cy="160" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="50" cy="130" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="50" cy="100" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="50" cy="70" r="6" fill="#E30613" fillOpacity="0.6" />
            <circle cx="70" cy="40" r="6" fill="#E30613" fillOpacity="0.6" />
            
            {/* Connection lines - matches logo pattern */}
            <line x1="100" y1="100" x2="100" y2="30" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="130" y2="40" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="150" y2="70" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="150" y2="100" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="150" y2="130" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="130" y2="160" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="170" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="70" y2="160" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="50" y2="130" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="50" y2="100" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="50" y2="70" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="70" y2="40" stroke="#E30613" strokeWidth="1.2" strokeOpacity="0.5" />
          </svg>
        </div>
        
        <div className="absolute top-[20%] left-[15%] w-[250px] h-[250px] animate-float-3">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Main node center - matches logo style */}
            <circle cx="100" cy="100" r="8" fill="#6B7280" fillOpacity="0.7" />
            
            {/* Connected nodes - exact logo pattern but smaller */}
            <circle cx="100" cy="40" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="125" cy="48" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="140" cy="75" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="140" cy="100" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="140" cy="125" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="125" cy="152" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="100" cy="160" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="75" cy="152" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="60" cy="125" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="60" cy="100" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="60" cy="75" r="4" fill="#E30613" fillOpacity="0.6" />
            <circle cx="75" cy="48" r="4" fill="#E30613" fillOpacity="0.6" />
            
            {/* Connection lines - matches logo pattern */}
            <line x1="100" y1="100" x2="100" y2="40" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="125" y2="48" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="140" y2="75" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="140" y2="100" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="140" y2="125" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="125" y2="152" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="160" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="75" y2="152" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="60" y2="125" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="60" y2="100" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="60" y2="75" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="75" y2="48" stroke="#E30613" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
        
        {/* Large central node cluster - based on the logo's network structure */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
          {/* Center node with pulsing effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-400/80 animate-slow-pulse">
            {/* Ring glow effect */}
            <div className="absolute inset-0 rounded-full animate-ping-slow bg-gray-400/30"></div>
          </div>
          
          {/* Nodes exactly matching logo pattern */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-[20%] left-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-[35%] left-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute bottom-[35%] left-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute bottom-[20%] left-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute bottom-[20%] right-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute bottom-[35%] right-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-[35%] right-[15%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          <div className="absolute top-[20%] right-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-agilite-red/80 animate-float-small"></div>
          
          {/* Connection lines - animated with gradients */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E30613" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E30613" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Connections matching logo pattern */}
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="15%" y2="65%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="85%" y2="65%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="85%" y2="35%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="url(#lineGradientDark)" strokeWidth="2" className="animate-pulse-slow" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffect; 