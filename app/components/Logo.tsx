import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Face */}
      <path d="M50 50 L15 30 L50 10 L85 30 Z" fill="url(#logo-grad-top)"/>
      {/* Left Face */}
      <path d="M50 50 L15 30 L15 70 L50 90 Z" fill="url(#logo-grad-left)"/>
      {/* Right Face */}
      <path d="M50 50 L85 30 L85 70 L50 90 Z" fill="url(#logo-grad-right)"/>
      <defs>
        <linearGradient id="logo-grad-top" x1="50" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7"/>
          <stop offset="1" stopColor="#d8b4fe"/>
        </linearGradient>
        <linearGradient id="logo-grad-left" x1="15" y1="50" x2="50" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1"/>
          <stop offset="1" stopColor="#4338ca"/>
        </linearGradient>
        <linearGradient id="logo-grad-right" x1="85" y1="50" x2="50" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3730a3"/>
          <stop offset="1" stopColor="#312e81"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
