"use client";

import React from 'react';

interface WidgetTestimonialCardProps {
  quote: string;
  author: string;
  age: number;
  condition: string;
  rating: number;
  isDarkMode?: boolean;
  className?: string;
}

export const WidgetTestimonialCard: React.FC<WidgetTestimonialCardProps> = ({
  quote = "Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process.",
  author = "Sarah Johnson",
  age = 45,
  condition = "Diabetes Management",
  rating = 5,
  isDarkMode = false,
  className = ""
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-[#1C393B]' : 'bg-[#E0F3F0]'} ${className}`}>
      {/* Quote Section */}
      <div className="mb-6" style={{ maxHeight: '115px', overflow: 'hidden' }}>
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-sans text-sm leading-relaxed`}
           style={{
             fontWeight: '500',
             fontSize: 'clamp(10px, 2vw, 16px)',
             lineHeight: '120%',
             letterSpacing: '0px',
             wordWrap: 'break-word',
             overflowWrap: 'break-word'
           }}>
          "{quote}"
        </p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column - Author Info */}
        <div className="flex flex-col">
          <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-sans text-sm font-semibold`}>
            {author}
          </span>
          <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            {age} • {condition}
          </span>
        </div>

        {/* Right Column - Star Rating */}
        <div className="flex justify-end items-start">
          <div className="flex items-center">
            <span className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-sm font-semibold`}>
              {rating.toFixed(1)}
            </span>
            <img 
              src="/Storefront/Doctor Widget/Testimonials/Star2.svg" 
              alt="Star" 
              className="w-3 h-3 ml-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 