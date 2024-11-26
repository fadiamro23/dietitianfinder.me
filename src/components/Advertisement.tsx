'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Advertisement() {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!pathname || pathname.startsWith('/shop/') || pathname === '/wellness-trio') {
    return null;
  }

  if (imageError) {
    console.error('Failed to load advertisement image');
    return null;
  }

  return (
    <div className="sticky top-16 bg-white z-50 border-b shadow-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Link 
          href="/wellness-trio" 
          className="block hover:opacity-95 transition-opacity"
        >
          <div className="relative w-full h-[100px]">
            <Image
              src="/images/ads/ad-1.png"
              alt="Wellness Trio Advertisement"
              fill
              style={{ objectFit: 'contain' }}
              onError={() => setImageError(true)}
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  );
} 