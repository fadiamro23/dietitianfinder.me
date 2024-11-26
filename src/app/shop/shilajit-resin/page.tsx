'use client';

import React from 'react';
import ProductTemplate from '@/components/ProductTemplate';
import { shilajitResinImages } from '@/data/products';

const productData = {
  images: shilajitResinImages,
  title: "Pure Himalayan Shilajit Resin",
  price: 48.99,
  description: "100% Pure and Natural Himalayan Shilajit Resin, traditionally known as the \"Destroyer of Weakness\". Rich in fulvic acid and essential minerals.",
  bulletPoints: [
    "High Altitude Sourced",
    "Rich in Fulvic Acid",
    "85+ Minerals & Trace Elements",
    "10 GRAMS X 30 PCS",
    "Traditional Ayurvedic Formula",
    "Supports Natural Energy"
  ],
  specifications: [
    { label: 'Usage And Dosage', value: 'Take a pea-sized amount 1 stick daily with warm water or milk' },
    { label: 'Product Specification', value: '10 GRAMS X 30 pcs' },
    { label: 'Department Name', value: 'ADULT' },
    { label: 'Shelf Life', value: '2 YEARS' },
    { label: 'Packaging', value: 'Glass Jar' },
    { label: 'Brand Name', value: 'MINCH' },
    { label: 'Ingredients', value: 'Pure Himalayan Shilajit Resin' },
    { label: 'Gender', value: 'Unisex' },
    { label: 'Charge Unit', value: 'jars' },
    { label: 'Weight', value: '375g' },
    { label: 'Certification', value: 'GMP' },
    { label: 'Origin', value: 'Himalayan Mountains' }
  ],
  keyFeatures: [
    {
      title: "Natural Energy",
      description: "Acts as a natural adaptogen, helping combat fatigue and improve your body's resilience to physical and mental stress."
    },
    {
      title: "Mineral Rich",
      description: "Contains over 85 minerals and trace elements in their ionic form for maximum bioavailability."
    },
    {
      title: "Cognitive Support",
      description: "Supports mental clarity, focus, and memory through its unique combination of fulvic acid and minerals."
    }
  ],
  longDescription: `Our Pure Himalayan Shilajit Resin is carefully sourced from high-altitude regions of the Himalayas. 
    This premium-grade resin contains naturally occurring fulvic acid, humic acid, and over 85 minerals 
    and trace elements. Known for centuries in Ayurvedic medicine as the "Destroyer of Weakness," 
    Shilajit supports natural energy, mental clarity, and overall vitality.`,
  stripeLink: "https://buy.stripe.com/YOUR_STRIPE_LINK" // Replace with your actual Stripe link
};

export default function ShilajitResinPage() {
  return <ProductTemplate {...productData} />;
} 