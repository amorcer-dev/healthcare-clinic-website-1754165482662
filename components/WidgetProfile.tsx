"use client";

import React from 'react';

interface WidgetProfileProps {
  doctorName?: string;
  specialty?: string;
  patients?: string;
  experience?: string;
  rating?: string;
  imageSrc?: string;
  profileImage?: string;
  isDarkMode?: boolean;
  onBookAppointment?: () => void;
  className?: string;
}

export const WidgetProfile: React.FC<WidgetProfileProps> = ({
  doctorName = "Dr. Bellamy Nicholas",
  specialty = "MD, Family Medicine",
  patients = "1000+",
  experience = "10 Yrs",
  rating = "4.5",
  imageSrc = "/Storefront/Doctor Widget/DoctorImage.png",
  profileImage,
  isDarkMode = false,
  onBookAppointment,
  className = ""
}) => {
  return (
    <div className={`w-[400px] bg-[#02816C] rounded-2xl p-8 text-center ${className}`}>
      {/* Profile Picture Section */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div 
            className="w-24 h-24 rounded-full overflow-hidden border-2"
            style={{ borderColor: '#69B4A8' }}
          >
            <img 
              src={profileImage || imageSrc}
              alt={doctorName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name and Title Section */}
      <div className="mb-8">
        <h3 className="text-white font-sans text-2xl font-bold mb-2">
          {doctorName}
        </h3>
        <p className="text-gray-300 font-sans text-lg">
          {specialty}
        </p>
      </div>

      {/* Statistics Section */}
      <div className="relative mb-8">
        <div className="grid grid-cols-3 gap-4">
          {/* Patients */}
          <div className="text-center">
            <div className="text-white font-sans text-2xl font-bold mb-1">
              {patients}
            </div>
            <div className="text-gray-300 font-sans text-sm">
              Patients
            </div>
          </div>

          {/* Experience */}
          <div className="text-center">
            <div className="text-white font-sans text-2xl font-bold mb-1">
              {experience}
            </div>
            <div className="text-gray-300 font-sans text-sm">
              Experience
            </div>
          </div>

          {/* Rating */}
          <div className="text-center">
            <div className="text-white font-sans text-2xl font-bold mb-1">
              {rating}
            </div>
            <div className="text-gray-300 font-sans text-sm">
              Ratings
            </div>
          </div>
        </div>

        {/* Fading separator lines */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent transform -translate-x-1/2"></div>
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent transform translate-x-1/2"></div>
      </div>

      {/* Book Appointment Button */}
      <div className="w-full">
        <button
          onClick={onBookAppointment}
          className="w-full bg-white text-teal-800 font-sans font-semibold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}; 