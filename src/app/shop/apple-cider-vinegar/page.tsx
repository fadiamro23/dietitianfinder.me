import React from 'react';
import ProductGallery from '@/components/ProductGallery';
import { appleCiderVinegarImages } from '@/data/products';

const specifications = [
  { label: 'Usage And Dosage', value: 'Take 2 Per daily with 8-12 oz of water or as directed by your healt' },
  { label: 'Product Specification', value: '120 CAPSULES' },
  { label: 'Department Name', value: 'ADULT' },
  { label: 'Shelf Life', value: '2 YEARS' },
  { label: 'Packaging', value: 'Bottle' },
  { label: 'Brand Name', value: 'MINCH' },
  { label: 'Ingredients', value: 'Apple Vinegar' },
  { label: 'Gender', value: 'Unisex' },
  { label: 'Charge Unit', value: 'bottles' },
  { label: 'Weight', value: '128g' },
  { label: 'Certification', value: 'CFDA' },
  { label: 'Origin', value: 'US(Origin)' },
];

export default function AppleCiderVinegarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductGallery images={appleCiderVinegarImages} />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Apple Cider Vinegar Capsules
          </h1>
          
          {/* Price */}
          <div className="mt-4 mb-6">
            <span className="text-3xl font-bold text-gray-900">$24</span>
            <span className="ml-2 text-lg text-gray-500">USD</span>
          </div>

          <div className="text-lg text-gray-500 space-y-4">
            <p>
              Natural Raw Apple Cider Vinegar capsules with Cinnamon, Ginger, and Cayenne Pepper for enhanced detox support.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>400mg Maximum Strength</li>
              <li>Natural Detox Support</li>
              <li>With Mother</li>
              <li>Enhanced with Cinnamon & Ginger</li>
              <li>Supports Healthy Digestion</li>
            </ul>
            <div className="mt-8">
              {/* Buy Now Button */}
              <a 
                href="https://buy.stripe.com/14kdRNb023JO6pW4gi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Promoting Digestion</h3>
            <p className="text-gray-600">
              Minch apple vinegar capsules contain rich organic acids, amino acids, and other components, 
              which can accelerate gastrointestinal peristalsis, help digestion and absorption, and improve indigestion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Protecting Liver</h3>
            <p className="text-gray-600">
              Rich in malic acid, it promotes liver detoxification and metabolism.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Weight Management</h3>
            <p className="text-gray-600">
              Burn excess fat, promote fat breakdown, and maintain body shape.
            </p>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specifications.map((spec, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="font-medium text-gray-700">{spec.label}</div>
              <div className="text-gray-600 mt-1">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Our premium Apple Cider Vinegar capsules are made from the finest natural ingredients, 
            featuring raw apple cider vinegar with "the Mother" - the beneficial compounds that make 
            ACV so powerful. Enhanced with cinnamon, ginger, and cayenne pepper, these capsules 
            provide comprehensive support for your health and wellness goals.
          </p>
        </div>
      </div>
    </div>
  );
} 