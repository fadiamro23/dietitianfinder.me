import { City, Dietitian } from './types';

export function generateDietitianSchema(dietitian: Dietitian, city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `https://yourdomain.com/dietitian/${dietitian.id}`,
    name: dietitian.name,
    description: dietitian.bio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'US'
    },
    url: `https://yourdomain.com/${city.slug}/dietitians`,
    telephone: dietitian.phone,
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00',
    areaServed: {
      '@type': 'City',
      name: city.name,
      '@id': `https://yourdomain.com/city/${city.id}`
    }
  };
}

export function generateCitySchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    '@id': `https://yourdomain.com/city/${city.id}`,
    name: city.name,
    state: city.state,
    url: `https://yourdomain.com/${city.slug}/dietitians`
  };
}

export function generateFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };
} 