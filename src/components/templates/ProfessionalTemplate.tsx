import React from 'react';
import Link from 'next/link';
import TipsCard from '@/components/TipsCard';
import { City, Dietitian } from '@/lib/types';

type ProfessionalTemplateProps = {
  city: City;
  dietitian: Dietitian;
};

export default function ProfessionalTemplate({ city, dietitian }: ProfessionalTemplateProps) {
  const cleanGoogleMapsUrl = dietitian.googleMapsUrl?.split('?')[0] || '';
  const hasValidAddress = dietitian.address && dietitian.address !== 'ýýýýýý';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link 
          href={`/${city.slug}/dietitians`}
          className="text-green-600 hover:text-green-800"
        >
          ← Back to {city.name} Dietitians
        </Link>
      </nav>

      {/* Add TipsCard here */}
      <div className="mb-8">
        <TipsCard />
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {dietitian.businessName}
            </h1>
            <p className="text-gray-600 mb-4">
              {dietitian.specialty} in {city.name}
            </p>
          </div>
          {dietitian.rating > 0 && (
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="ml-1 font-semibold">{dietitian.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Main Info */}
        <div className="md:col-span-2">
          {/* About Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">
              {dietitian.bio || dietitian.notes || 'Professional registered dietitian providing personalized nutrition counseling and dietary advice.'}
            </p>
          </section>
        </div>

        {/* Right Column - Contact & Location */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            {dietitian.phone && (
              <p className="mb-3">
                <span className="font-medium">Phone:</span> {dietitian.phone}
              </p>
            )}
            {hasValidAddress && (
              <div className="mb-3">
                <span className="font-medium">Address:</span><br />
                <p className="mb-2">{dietitian.address}</p>
                {cleanGoogleMapsUrl && (
                  <Link 
                    href={cleanGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Google Maps
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 