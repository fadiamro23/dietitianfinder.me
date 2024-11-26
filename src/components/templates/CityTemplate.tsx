import React from 'react';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import TipsCard from '@/components/TipsCard';
import { City, Dietitian } from '@/lib/types';

type CityTemplateProps = {
  city: City;
  dietitians: Dietitian[];
  faqs: { question: string; answer: string; }[];
};

export default function CityTemplate({ city, dietitians, faqs }: CityTemplateProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Dietitians & Nutritionists in {city.name}
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        {dietitians.length} Professional{dietitians.length !== 1 ? 's' : ''} Available
      </p>
      
      <div className="mb-12">
        <TipsCard />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dietitians.map((dietitian, index) => {
          const slug = dietitian.businessName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');

          const cleanGoogleMapsUrl = dietitian.googleMapsUrl?.split('?')[0] || '';
          const hasValidAddress = dietitian.address && dietitian.address !== 'ýýýýýý';

          return (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <Link 
                href={`/${city.slug}/dietitians/${slug}`}
                className="block mb-4"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold">{dietitian.businessName}</h2>
                  {dietitian.rating > 0 && (
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{dietitian.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{dietitian.specialty}</p>
              </Link>

              {hasValidAddress && cleanGoogleMapsUrl && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">{dietitian.address}</p>
                  <Link 
                    href={cleanGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Maps
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {dietitians.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No dietitians are currently listed in {city.name}. Check back soon as we're constantly updating our directory.
          </p>
        </div>
      )}

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FAQ cityName={city.name} questions={faqs} />
      </section>
    </div>
  );
} 