"use client";

import React from 'react';

interface ServiceItem {
  name: string;
  icon: string;
}

interface WidgetServicesAndConditionsProps {
  specializedServices?: ServiceItem[];
  conditions?: string[];
  isDarkMode?: boolean;
  onAskCondition?: () => void;
  className?: string;
}

export const WidgetServicesAndConditions: React.FC<WidgetServicesAndConditionsProps> = ({
  specializedServices = [
    { name: "Cardiovascular Care", icon: "/Storefront/Doctor Widget/Services And Conditions/HeartMonitor.svg" },
    { name: "Preventive Medicine", icon: "/Storefront/Doctor Widget/Services And Conditions/MedBag.svg" },
    { name: "General Consultation", icon: "/Storefront/Doctor Widget/Services And Conditions/HealthPlus.svg" }
  ],
  conditions = [
    "Diabetes Management",
    "Hypertension",
    "High Cholesterol",
    "Preventive Care",
    "Cardiovascular Health",
    "Weight Management"
  ],
  isDarkMode = false,
  onAskCondition,
  className = ""
}) => {
  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`} 
         style={{
           border: '2px solid #029A80'
         }}>
      
      {/* Header */}
      <div className="flex items-center mb-6">
        {/* <img 
          src="/Storefront/Doctor Widget/Services And Conditions/BulletedList.svg" 
          alt="Services" 
          className="w-5 h-5 mr-2"
        /> */}
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
          Services and Conditions
        </h3>
      </div>

      {/* Specialized Services */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Specialized Services
        </h4>
        <div className="space-y-3">
          {specializedServices.map((service, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: isDarkMode ? '#323232' : '#E0F8F2' }}>
              {/* <img 
                src={service.icon}
                alt={service.name} 
                className="w-5 h-5 mr-3"
                style={{ filter: 'brightness(0)' }}
              /> */}
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-sans text-sm font-medium`}>
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fading Horizontal Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>

      {/* Conditions I Treat */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Conditions I Treat
        </h4>
        <div className="space-y-2">
          {conditions.map((condition, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-sm`}>
                {condition}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Don't See Your Condition Listed */}
      <div className="p-4 rounded-lg" 
           style={{
             background: 'linear-gradient(135deg, #01715E 0%, #029F85 100%)'
           }}>
        <h4 className="text-white font-sans text-base font-bold mb-2">
          Don't See Your Condition Listed?
        </h4>
        <p className="text-white/80 font-sans text-sm mb-4">
          Contact us to ask about your specific condition and treatment options.
        </p>
        <button
          onClick={onAskCondition}
          className="w-full inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-sm transform-gpu bg-transparent text-white border border-white hover:bg-white hover:text-teal-600"
        >
          Ask About My Condition
        </button>
      </div>
    </div>
  );
}; 