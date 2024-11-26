'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={400}
          height={533}
          className="rounded-lg shadow-lg mx-auto"
          priority
        />
      </div>
      
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Next
        </button>
      </div>
      
      <div className="text-center mt-2 text-gray-500">
        Image {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
} 