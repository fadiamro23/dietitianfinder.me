import React from 'react';
import Link from 'next/link';
import { getAllCitiesData } from '../lib/serverUtils';
import AlphabetIndex from '@/components/AlphabetIndex';

// City symbol mapping
const getCitySymbol = (cityName: string) => {
  const citySymbols: { [key: string]: string } = {
    'Aberdeen': '🏘️',
    'Newark': '🏙️',
    'Jersey City': '🌆',
    'Paterson': '🏘️',
    'Elizabeth': '🏢',
    'Lakewood': '🌳',
    'Edison': '⚡',
    'Woodbridge': '🌉',
    'Toms River': '🌊',
    'Hamilton Township': '🏛️',
    'Trenton': '🏛️',
    'Clifton': '🏢',
    'Cherry Hill': '🌸',
    'Brick': '🏗️',
    'Camden': '🌉',
    'Bayonne': '⚓',
    'East Orange': '🍊',
    'Passaic': '🏭',
    'Franklin Township': '🌲',
    'Union City': '🏙️',
    'Old Bridge': '🌉',
    'Vineland': '🍇',
    'North Bergen': '⛰️',
    'Hoboken': '🌆',
    'Perth Amboy': '🚢',
    'New Brunswick': '🎓',
    'West New York': '🗽',
    'Plainfield': '🏡',
    'Bloomfield': '🌺',
    'Atlantic City': '🎰',
  };

  return citySymbols[cityName] || '🏠';
};

export default async function Home() {
  const cities = await getAllCitiesData();

  // Group cities by first letter
  const groupedCities = cities.reduce((acc: { [key: string]: typeof cities }, city) => {
    const firstLetter = city.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(city);
    return acc;
  }, {});

  // Get sorted letters
  const letters = Object.keys(groupedCities).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Top Dietitians & Nutritionists in New Jersey
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Achieve Your Best Health with Top Nutrition Pros
        </p>
      </section>

      {/* Tips Card */}
      <div className="mb-12">
        <Link 
          href="/wellness-trio"
          className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl" role="img" aria-label="Tips">
              💡
            </span>
            <div>
              <h3 className="font-semibold text-lg">Essential Tips</h3>
              <p className="text-sm text-gray-600 mt-1">
                Seeing a nutritionist? Start with these must-know tips for your health journey!
              </p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  Top rated advice
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* A-Z Index */}
      <AlphabetIndex letters={letters} />

      {/* City Listings by Letter */}
      {letters.map(letter => (
        <section key={letter} id={`section-${letter}`} className="mb-12 scroll-mt-[150px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            {letter}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groupedCities[letter].map((city) => (
              <Link
                key={city.id}
                href={`/${city.slug}/dietitians`}
                className="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl" role="img" aria-label={city.name}>
                    {getCitySymbol(city.name)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{city.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {city.dietitianCount} {city.dietitianCount === 1 ? 'Professional' : 'Professionals'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose a Registered Dietitian?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-center space-x-2">
              <span className="text-2xl" role="img" aria-label="Tips">
                💡
              </span>
              <div>
                <h3 className="font-semibold text-lg">Essential Tips</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Seeing a nutritionist? Start with these must-know tips for your health journey!
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    Top rated advice
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Add more benefit cards here */}
        </div>
      </section>
    </div>
  );
} 