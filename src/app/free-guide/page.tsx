'use client';

import ClientOnly from '@/components/ClientOnly';
import { useRef } from 'react';

export default function FreeGuide() {
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ClientOnly>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none prose-h2:mb-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
              🌱 Unlock Your Best Self with Minch's Wellness Trio! 🌟
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Hello, wellness seekers! Are you ready to take your health to the next level? If you're searching for natural ways to enhance your energy, fortify your immune system, and feel amazing every day, you're in the right place! Today, we're excited to introduce three extraordinary supplements from Minch that are designed to empower your wellness journey. Backed by nature and crafted with care, these products are here to help you live your healthiest life yet. 🌿
            </p>
          </div>

          {/* Product Cards */}
          <div ref={productsRef} className="grid md:grid-cols-3 gap-8 mb-12 not-prose">
            {/* Apple Cider Vinegar Card */}
            <a 
              href="/shop/apple-cider-vinegar" 
              className="group block bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300 border-none">
                🍎 Apple Cider Vinegar Capsules
              </h2>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Supports Digestion
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Boosts Immunity
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Enhanced with Super Spices
                </li>
              </ul>
              <div className="mt-4 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex items-center justify-end">
                Shop Now 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Cranberry Extract Card */}
            <a 
              href="/shop/cranberry-extract" 
              className="group block bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300 border-none">
                🏔 Cranberry Extract
              </h2>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Urinary Tract Health
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Rich in Antioxidants
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Pure Organic Formula
                </li>
              </ul>
              <div className="mt-4 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex items-center justify-end">
                Shop Now 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Shilajit Card */}
            <a 
              href="/shop/shilajit-resin" 
              className="group block bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300 border-none">
                🏔️ Shilajit Resin
              </h2>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sustained Energy
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mental Clarity
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Immune Support
                </li>
              </ul>
              <div className="mt-4 text-green-600 group-hover:text-green-700 transition-colors duration-300 flex items-center justify-end">
                Shop Now 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Article Content */}
          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-green-600">🍎 Minch Apple Cider Vinegar Capsules – Your Daily Detox Made Simple</h2>
              <p>Minch Apple Cider Vinegar Capsules bring all the benefits of raw, unfiltered apple cider vinegar in a convenient capsule form, eliminating the sour taste while packing a powerful punch.</p>
              
              <h3 className="text-xl font-semibold mt-4">Why Choose Minch Apple Cider Vinegar Capsules?</h3>
              <div className="ml-6">
                <p><strong>Supports Detox & Digestion:</strong></p>
                <ul>
                  <li>For centuries, apple cider vinegar has been a trusted remedy for improving digestion and aiding natural detoxification.</li>
                  <li>Minch capsules combine this traditional wisdom with modern convenience.</li>
                </ul>
                
                <p><strong>Boosts Immunity with Vitamin C:</strong></p>
                <ul>
                  <li>Enriched with vitamin C, these capsules support your immune system and protect against harmful free radicals.</li>
                </ul>
                
                <p><strong>Enhanced with Super Spices:</strong></p>
                <ul>
                  <li>A unique blend of cinnamon, ginger, and cayenne pepper amplifies the benefits, offering anti-inflammatory properties, improved circulation, and metabolism support.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-600">🍓 Minch Organic Cranberry Extract – Nature's Antioxidant Powerhouse</h2>
              <p>Packed with antioxidants and essential nutrients, Minch Organic Cranberry Extract is a health must-have. This supplement not only protects your cells but also supports a vital aspect of wellness—urinary tract health.</p>
              
              <h3 className="text-xl font-semibold mt-4">What Makes Cranberry Extract Special?</h3>
              <div className="ml-6">
                <p><strong>Potent Antioxidant Support:</strong></p>
                <ul>
                  <li>Cranberries are rich in antioxidants that fight oxidative stress and promote cellular health.</li>
                  <li>Studies show their benefits in maintaining heart and immune health.</li>
                </ul>
                
                <p><strong>Urinary Tract Wellness:</strong></p>
                <ul>
                  <li>Cranberry extract is clinically proven to reduce the risk of UTIs by preventing harmful bacteria from sticking to the urinary tract walls.</li>
                </ul>
                
                <p><strong>Convenient & Organic:</strong></p>
                <ul>
                  <li>Easy-to-swallow soft capsules made from organic cranberries ensure you're getting a pure, high-quality product.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-600">🏔️ Minch Pure Himalayan Shilajit Resin – Ancient Energy Unleashed</h2>
              <p>Known as the "Destroyer of Weakness" in Ayurvedic medicine, Shilajit has been revered for centuries for its incredible health benefits. Minch Pure Himalayan Shilajit Resin is ethically sourced from the Himalayan mountains, delivering a potent dose of wellness in every serving.</p>
              
              <h3 className="text-xl font-semibold mt-4">Benefits of Shilajit Resin</h3>
              <div className="ml-6">
                <p><strong>Sustained Energy & Vitality:</strong></p>
                <ul>
                  <li>As a natural adaptogen, Shilajit helps combat fatigue and improves your body's resilience to stress.</li>
                  <li>Feel energized and focused throughout the day.</li>
                </ul>
                
                <p><strong>Immune System Supercharge:</strong></p>
                <ul>
                  <li>Packed with fulvic and humic acids, Shilajit enhances nutrient absorption and boosts your immune defenses.</li>
                </ul>
                
                <p><strong>Cognitive Clarity & Focus:</strong></p>
                <ul>
                  <li>Known for its neuroprotective properties, Shilajit supports brain health, sharpens focus, and promotes mental clarity.</li>
                </ul>
              </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Customers, Real Results</h2>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-green-500 pl-4">
                  <p className="italic">💬 "I've tried all three Minch products, and they've become a vital part of my routine. My digestion feels better, my energy levels are through the roof, and I haven't had a UTI in months! Highly recommend!"</p>
                  <footer className="text-gray-600 mt-2">– Sarah M.</footer>
                </blockquote>
                <blockquote className="border-l-4 border-green-500 pl-4">
                  <p className="italic">💬 "The Shilajit Resin is incredible for my workouts. I feel stronger and more focused. It's a game-changer!"</p>
                  <footer className="text-gray-600 mt-2">– James L.</footer>
                </blockquote>
              </div>
            </section>

            {/* Why Choose Minch */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Minch?</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <strong>Quality You Can Trust:</strong>
                  <p>Minch products are made with the highest-quality ingredients and rigorous testing to ensure safety and efficacy.</p>
                </li>
                <li>
                  <strong>Backed by Science:</strong>
                  <p>Each supplement is formulated using evidence-based research, ensuring you get maximum benefits.</p>
                </li>
                <li>
                  <strong>Convenient & Sustainable:</strong>
                  <p>From eco-friendly packaging to easy-to-use capsules and resin, Minch products fit seamlessly into your daily routine.</p>
                </li>
              </ul>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-8 my-12">
              <h2 className="text-3xl font-bold text-center mb-4">Take the First Step Towards Wellness Today!</h2>
              <p className="text-center mb-8 text-lg">
                Your journey to better health starts here. Whether you want to detox, support your immune system, or unlock sustained energy, Minch's wellness trio has you covered. Don't wait—shop now and experience the difference for yourself!
              </p>
              <div className="text-center">
                <button 
                  onClick={scrollToProducts}
                  className="text-xl font-bold mb-4 hover:text-gray-100 transition-colors cursor-pointer"
                >
                  🌟 Shop Now and feel the transformation! 🌿
                </button>
                <p className="italic">Remember: Wellness is a journey, not a destination. Make Minch your trusted partner on this incredible adventure. Stay healthy, stay happy, and stay you! 💚</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </ClientOnly>
  );
} 