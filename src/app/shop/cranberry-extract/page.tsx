'use client';

import React from 'react';
import ProductTemplate from '@/components/ProductTemplate';
import { cranberryExtractImages } from '@/data/products';

const productData = {
  images: cranberryExtractImages,
  title: "Organic Cranberry Extract Capsules",
  price: 0.99,
  originalPrice: 6.38,
  discount: "84% OFF",
  description: "Premium Organic Cranberry Extract capsules for urinary tract health and antioxidant support. Natural and potent formula for optimal wellness.",
  bulletPoints: [
    "100% Natural & Organic",
    "Supports Urinary Tract Health",
    "Rich in Antioxidants",
    "Promotes Heart Health",
    "Immune System Support",
    "Easy-to-Swallow Capsules"
  ],
  specifications: [
    { label: 'Usage And Dosage', value: 'Take 2 capsules daily with water' },
    { label: 'Product Specification', value: '60 Capsules' },
    { label: 'Department Name', value: 'ADULT' },
    { label: 'Shelf Life', value: '24 Months' },
    { label: 'Packaging', value: 'Bottle' },
    { label: 'Brand Name', value: 'MINCH' },
    { label: 'Ingredients', value: 'Organic Cranberry Extract' },
    { label: 'Gender', value: 'Unisex' },
    { label: 'Charge Unit', value: 'bottle' },
    { label: 'Weight', value: '60g' },
    { label: 'Certification', value: 'GMP, FDA' },
    { label: 'Origin', value: 'US' }
  ],
  keyFeatures: [
    {
      title: "Urinary Tract Support",
      description: "Helps maintain urinary tract health and prevents harmful bacteria from adhering to urinary tract walls."
    },
    {
      title: "Antioxidant Rich",
      description: "Packed with powerful antioxidants that help protect cells from free radical damage and support overall health."
    },
    {
      title: "Heart Health",
      description: "Supports cardiovascular health by helping maintain healthy cholesterol levels and blood pressure."
    }
  ],
  longDescription: `Our premium Organic Cranberry Extract capsules are made from the finest organic cranberries, 
    carefully processed to preserve their natural benefits. Each capsule is packed with powerful antioxidants 
    and proanthocyanidins that support urinary tract health, cardiovascular function, and immune system strength. 
    This natural supplement offers a convenient way to get the benefits of cranberries without the sugar and 
    calories of juice. Made in FDA-registered, GMP-certified facilities to ensure the highest quality and safety.`,
  stripeLink: "https://buy.stripe.com/YOUR_STRIPE_LINK" // Replace with your actual Stripe link
};

export default function CranberryExtractPage() {
  return <ProductTemplate {...productData} />;
} 