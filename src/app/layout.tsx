import React from 'react';
import type { Metadata } from 'next/types';
import Navigation from '@/components/Navigation';
import Advertisement from '@/components/Advertisement';
import ClientOnly from '@/components/ClientOnly';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Top Dietitians & Nutritionists in New Jersey',
  description: 'Find the best registered dietitians and nutritionists in New Jersey',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning={true} className="font-sans">
        <ClientOnly>
          <Navigation />
          <div className="min-h-screen pt-16">
            <Advertisement />
            <main>
              {children}
            </main>
          </div>
          <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">NJ Directories</h3>
                  <p className="text-gray-600">
                    Helping you find the right health professionals in New Jersey.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-trio" className="text-gray-600 hover:text-gray-900">
                        Wellness Trio
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-600 hover:text-gray-900">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                  <p className="text-gray-600">
                    Feel free to reach out to us for any questions or assistance.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-500">
                  © {new Date().getFullYear()} NJ Directories Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ClientOnly>
      </body>
    </html>
  );
} 