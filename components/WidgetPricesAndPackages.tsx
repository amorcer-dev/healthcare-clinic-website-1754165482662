"use client";

import React from 'react';

interface ConsultationPricing {
  name: string;
  price: string;
}

interface PackageOffering {
  name: string;
  price: string;
  features: string[];
}

interface WidgetPricesAndPackagesProps {
  consultationPricing?: ConsultationPricing[];
  packages?: PackageOffering[];
  isDarkMode?: boolean;
  className?: string;
}

export const WidgetPricesAndPackages: React.FC<WidgetPricesAndPackagesProps> = ({
  consultationPricing = [
    { name: "Initial Consultation", price: "$120" },
    { name: "Follow-Up Consultation", price: "$90" },
    { name: "Message Consultation", price: "$25" }
  ],
  packages = [
    {
      name: "Diabetes Management",
      price: "$250",
      features: [
        "2 visits free",
        "Chat access 24x7",
        "Diabetes Management"
      ]
    },
    {
      name: "Diabetes Management",
      price: "$250",
      features: [
        "2 visits free",
        "Chat access 24x7",
        "Diabetes Management"
      ]
    }
  ],
  isDarkMode = false,
  className = ""
}) => {
  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`} 
         style={{
           border: '2px solid #029A80'
         }}>
      
      {/* Header */}
      <div className="flex items-center mb-6">
        <img 
          src="/Storefront/Doctor Widget/Pricing And Packages/PricingAndPackages.svg" 
          alt="Pricing" 
          className="w-5 h-5 mr-2"
        />
        <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
          Pricing & Packages
        </h3>
      </div>

      {/* Transparent Pricing Section */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Transparent Pricing
        </h4>
        <div className="space-y-3">
          {consultationPricing.map((consultation, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: isDarkMode ? '#323232' : '#F5F5F5' }}>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-sm`}>
                {consultation.name}
              </span>
              <span className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-sm font-semibold`}>
                {consultation.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fading Horizontal Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>

      {/* Packages Section */}
      <div className="mb-6">
        <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-lg font-semibold mb-4`}>
          Packages
        </h4>
        <div className="space-y-4">
          {packages.map((packageItem, index) => (
            <div key={index} className="p-4 rounded-lg" style={{ backgroundColor: isDarkMode ? '#1C393B' : '#E0F8F2' }}>
              {/* Package Header */}
              <div className="flex items-center justify-between mb-4">
                <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-sans text-base font-semibold`}>
                  {packageItem.name}
                </h5>
                <span className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-base font-bold`}>
                  {packageItem.price}
                </span>
              </div>
              
              {/* Package Features */}
              <div className="space-y-2">
                {packageItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'} font-sans text-sm`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 