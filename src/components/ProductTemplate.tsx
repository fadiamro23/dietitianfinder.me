import React from 'react';
import ProductGallery from '@/components/ProductGallery';
import { ProductImage } from '@/data/products';

interface Specification {
  label: string;
  value: string;
}

interface KeyFeature {
  title: string;
  description: string;
}

interface ProductTemplateProps {
  images: ProductImage[];
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  description: string;
  bulletPoints: string[];
  specifications: Specification[];
  keyFeatures: KeyFeature[];
  longDescription: string;
  stripeLink: string;
}

export default function ProductTemplate({
  images,
  title,
  price,
  originalPrice,
  discount,
  description,
  bulletPoints,
  specifications,
  keyFeatures,
  longDescription,
  stripeLink,
}: ProductTemplateProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" suppressHydrationWarning>
      <div className="grid md:grid-cols-2 gap-8" suppressHydrationWarning>
        <ProductGallery images={images} />

        {/* Product Info */}
        <div suppressHydrationWarning>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {title}
          </h1>
          
          {/* Price */}
          <div className="mt-4 mb-6" suppressHydrationWarning>
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            {originalPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">${originalPrice}</span>
            )}
            {discount && (
              <span className="ml-2 text-red-600 font-semibold">{discount}</span>
            )}
          </div>

          <div className="text-lg text-gray-500 space-y-4" suppressHydrationWarning>
            <p>{description}</p>
            <ul className="list-disc list-inside space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="mt-8" suppressHydrationWarning>
              <a 
                href={stripeLink}
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
      <div className="mt-16" suppressHydrationWarning>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6" suppressHydrationWarning>
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100" suppressHydrationWarning>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16" suppressHydrationWarning>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" suppressHydrationWarning>
          {specifications.map((spec, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg"
              suppressHydrationWarning
            >
              <div className="font-medium text-gray-700">{spec.label}</div>
              <div className="text-gray-600 mt-1">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16" suppressHydrationWarning>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
        <div className="prose prose-lg max-w-none" suppressHydrationWarning>
          <p>{longDescription}</p>
        </div>
      </div>
    </div>
  );
} 