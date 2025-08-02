"use client";

import React, { useState } from 'react';
import { WidgetTestimonialCard } from "./WidgetTestimonialCard";

interface Testimonial {
  quote: string;
  author: string;
  age: number;
  condition: string;
  rating: number;
}

interface WidgetTestimonialCarouselProps {
  testimonials?: Testimonial[];
  overallRating?: number;
  totalReviews?: number;
  recommendedRate?: number;
  isDarkMode?: boolean;
  className?: string;
}

export const WidgetTestimonialCarousel: React.FC<WidgetTestimonialCarouselProps> = ({
  testimonials = [
    {
      quote: "Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process.",
      author: "Sarah Johnson",
      age: 45,
      condition: "Diabetes",
      rating: 5
    },
    {
      quote: "The best doctor I've ever had. His approach to preventive care is outstanding and he really listens to your concerns.",
      author: "Michael Chen",
      age: 52,
      condition: "Heart Disease",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and genuinely caring. Dr. Bellamy has helped me manage my condition effectively.",
      author: "Emily Rodriguez",
      age: 38,
      condition: "Lung Disease",
      rating: 5
    }
  ],
  overallRating = 4.9,
  totalReviews = 127,
  recommendedRate = 98,
  isDarkMode = false,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`} 
         style={{
           border: '2px solid #029A80'
         }}>
      
      {/* Title */}
      <div className="flex items-center mb-6">
        <img 
          src="/Storefront/Doctor Widget/Testimonials/Star1.svg" 
          alt="Star" 
          className="w-5 h-5 mr-2"
        />
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
          Patient Testimonials
        </h3>
      </div>

      {/* Testimonial Card Carousel */}
      <div className="mb-8">
        <div className="relative">
          <WidgetTestimonialCard
            quote={testimonials[currentIndex]?.quote || ""}
            author={testimonials[currentIndex]?.author || ""}
            age={testimonials[currentIndex]?.age || 0}
            condition={testimonials[currentIndex]?.condition || ""}
            rating={testimonials[currentIndex]?.rating || 0}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Three-Column Statistics */}
      <div className="grid grid-cols-3 gap-4 relative">
        {/* Left Column - Overall Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-bold`}>
              {overallRating}
            </p>
            <img 
              src="/Storefront/Doctor Widget/Testimonials/Star2.svg" 
              alt="Star" 
              className="w-4 h-4 ml-1"
            />
          </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Overall Rating
          </p>
        </div>

        {/* First Faded Line */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>

        {/* Middle Column - Total Reviews */}
        <div className="text-center">
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-sans text-lg font-bold mb-2`}>
            {totalReviews}
          </p>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Total Reviews
          </p>
        </div>

        {/* Second Faded Line */}
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>

        {/* Right Column - Recommended Rate */}
        <div className="text-center">
          <p className="text-[#00A085] font-sans text-lg font-bold mb-2" style={{ fontSize: '10px' }}>
            {recommendedRate}%
          </p>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-xs`}>
            Recommended Rate
          </p>
        </div>
      </div>
    </div>
  );
}; 