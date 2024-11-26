import path from 'path';
import { City, Dietitian } from './types';
import { parseCsvFile } from './parser';

export async function getCities(): Promise<City[]> {
  const citiesFile = path.join(process.cwd(), 'src/data/cities.csv');
  return parseCsvFile<City>(citiesFile);
}

export async function getDietitians(cityId: string): Promise<Dietitian[]> {
  const dietitiansFile = path.join(process.cwd(), 'src/data/dietitians.csv');
  const allDietitians = await parseCsvFile<Dietitian>(dietitiansFile);
  return allDietitians.filter(d => d.cityId === cityId);
}

export function generateCityFAQs(cityName: string): { question: string; answer: string }[] {
  return [
    {
      question: `How do I choose the right dietitian in ${cityName}?`,
      answer: `When selecting a dietitian in ${cityName}, consider their specialization, experience, and approach to nutrition counseling. Look for registered dietitians who are certified and have experience in your specific health concerns.`
    },
    {
      question: `What's the average cost of seeing a dietitian in ${cityName}?`,
      answer: `Consultation fees in ${cityName} typically range from $100-200 for an initial visit. Many dietitians offer package deals for ongoing support, and some services may be covered by insurance.`
    },
    {
      question: `Do dietitians in ${cityName} offer virtual consultations?`,
      answer: `Yes, many dietitians in ${cityName} offer virtual consultations, making it convenient to receive professional nutrition guidance from the comfort of your home.`
    }
  ];
} 