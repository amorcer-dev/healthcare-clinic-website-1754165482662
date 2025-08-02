"use client";

import React from 'react';

interface EducationItem {
  college: string;
  activity: string;
}

interface WidgetAboutDoctorProps {
  aboutText?: string;
  education?: EducationItem[];
  hospitals?: string[];
  certificates?: string[];
  languages?: string[];
  isDarkMode?: boolean;
  className?: string;
}

export const WidgetAboutDoctor: React.FC<WidgetAboutDoctorProps> = ({
  aboutText = "Dr. Bellamy Nicholas is a board-certified family medicine physician with over 10 years of experience in primary care. He specializes in preventive medicine, chronic disease management, and patient education.",
  education = [
    { college: "Harvard Medical School", activity: "Medical Degree" },
    { college: "Johns Hopkins University", activity: "Residency in Family Medicine" },
    { college: "Stanford University", activity: "Fellowship in Preventive Medicine" }
  ],
  hospitals = [
    "Massachusetts General Hospital",
    "Johns Hopkins Hospital",
    "Stanford Medical Center"
  ],
  certificates = [
    "American Board of Family Medicine",
    "Board Certified in Preventive Medicine",
    "Advanced Cardiac Life Support"
  ],
  languages = ["English", "Spanish", "French"],
  isDarkMode = false,
  className = ""
}) => {
  return (
    <div className={`w-[360px] rounded-2xl p-8 relative ${isDarkMode ? 'bg-[#20262F]' : 'bg-white'} ${className}`} 
         style={!isDarkMode ? {
           background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 75%, #03B894 100%)',
           border: '2px solid #029A80'
         } : {
           border: '2px solid #029A80'
         }}>
      
      {/* About Doctor Section */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <img 
            src="/Storefront/Doctor Widget/About Doctor/Stethoscope.svg"
            alt="About Doctor"
            className="w-6 h-6 mr-3"
          />
          <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
            About Doctor
          </h3>
        </div>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-sans text-sm leading-relaxed`}>
          {aboutText}
        </p>
      </div>

      {/* Faded Horizontal Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>

      {/* Education Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img 
            src="/Storefront/Doctor Widget/About Doctor/GradCap.svg"
            alt="Education"
            className="w-6 h-6 mr-3"
          />
          <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
            Education
          </h3>
        </div>
        <div className="space-y-3">
          {education.map((item, index) => (
            <div key={index} className="mb-3">
              <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-sans text-sm font-medium`}>
                {item.college}
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} font-sans text-xs`}>
                {item.activity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Affiliation Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img 
            src="/Storefront/Doctor Widget/About Doctor/Hospital.svg"
            alt="Hospital Affiliation"
            className="w-6 h-6 mr-3"
          />
          <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
            Hospital Affiliation
          </h3>
        </div>
        <div className="space-y-2">
          {hospitals.map((hospital, index) => (
            <p key={index} className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-sans text-sm`}>
              {hospital}
            </p>
          ))}
        </div>
      </div>

      {/* Board Certificates Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img 
            src="/Storefront/Doctor Widget/About Doctor/Certificate.svg"
            alt="Board Certificates"
            className="w-6 h-6 mr-3"
          />
          <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
            Board Certificates
          </h3>
        </div>
        <div className="space-y-2">
          {certificates.map((certificate, index) => (
            <p key={index} className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-sans text-sm`}>
              {certificate}
            </p>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div>
        <div className="flex items-center mb-4">
          <img 
            src="/Storefront/Doctor Widget/About Doctor/Language.svg"
            alt="Languages"
            className="w-6 h-6 mr-3"
          />
          <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-sans text-xl font-bold`}>
            Languages
          </h3>
        </div>
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-sans text-sm`}>
          {languages.join(', ')}
        </p>
      </div>
    </div>
  );
}; 