import React from 'react';

export default function FreeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          🌱 Unlock Your Best Self with Minch's Wellness Trio! 🌟
        </h1>

        {/* Introduction */}
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Hello, wellness seekers! Are you ready to take your health to the next level? If you're searching for natural ways to enhance your energy, fortify your immune system, and feel amazing every day, you're in the right place! Today, we're excited to introduce three extraordinary supplements from Minch that are designed to empower your wellness journey. Backed by nature and crafted with care, these products are here to help you live your healthiest life yet. 🌿
          </p>
        </div>

        {/* Product Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-600">
            🍎 Minch Apple Cider Vinegar Capsules – Your Daily Detox Made Simple
          </h2>
          <p>
            Minch Apple Cider Vinegar Capsules bring all the benefits of raw, unfiltered apple cider vinegar in a convenient capsule form, eliminating the sour taste while packing a powerful punch.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Choose Minch Apple Cider Vinegar Capsules?</h3>
          <ul className="space-y-4">
            <li>
              <strong>Supports Detox & Digestion:</strong>
              <ul className="ml-6 list-disc">
                <li>For centuries, apple cider vinegar has been a trusted remedy for improving digestion and aiding natural detoxification.</li>
                <li>Minch capsules combine this traditional wisdom with modern convenience.</li>
              </ul>
            </li>
            {/* Add other benefits... */}
          </ul>
        </section>

        {/* Similar sections for Cranberry Extract and Shilajit Resin */}

        {/* Testimonials */}
        <section className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Real Customers, Real Results</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-green-500 pl-4">
              <p>"I've tried all three Minch products, and they've become a vital part of my routine. My digestion feels better, my energy levels are through the roof, and I haven't had a UTI in months! Highly recommend!"</p>
              <footer className="text-gray-600">– Sarah M.</footer>
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4">
              <p>"The Shilajit Resin is incredible for my workouts. I feel stronger and more focused. It's a game-changer!"</p>
              <footer className="text-gray-600">– James L.</footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Take the First Step Towards Wellness Today!</h2>
          <p className="mb-6">
            Your journey to better health starts here. Whether you want to detox, support your immune system, or unlock sustained energy, Minch's wellness trio has you covered. Don't wait—shop now and experience the difference for yourself!
          </p>
          <a 
            href="/shop" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            🌟 Shop Now and Feel the Transformation! 🌿
          </a>
        </div>
      </article>
    </div>
  );
} 