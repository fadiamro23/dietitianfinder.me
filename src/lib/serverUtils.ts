import { promises as fs } from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { Readable } from 'stream';
import { City, Dietitian } from './types';

function createSeoSlug(text: string): string {
  return text
    .toLowerCase()
    // Replace spaces and special characters with hyphens
    .replace(/[^a-z0-9]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

export async function readCsvFile<T extends City | Dietitian>(filePath: string): Promise<T[]> {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const results: T[] = [];
  
  return new Promise((resolve, reject) => {
    const readableStream = Readable.from([fileContent]);
    readableStream
      .pipe(csv({
        mapValues: ({ header, value }) => {
          if (header === 'specialties') {
            return value.split(',');
          }
          if (['rating', 'dietitianCount', 'latitude', 'longitude'].includes(header)) {
            return Number(value) || 0;
          }
          return value;
        }
      }))
      .on('data', (data: T) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

export async function getCityData(citySlug: string) {
  try {
    const citiesPath = path.join(process.cwd(), 'src/data/cities.csv');
    const dietitiansPath = path.join(process.cwd(), 'src/data/dietitians.csv');

    const cities = await readCsvFile<City>(citiesPath);
    const allDietitians = await readCsvFile<Dietitian>(dietitiansPath);
    
    console.log('Loading data for city:', citySlug);
    
    const city = cities.find(c => createSeoSlug(c.slug) === createSeoSlug(citySlug));

    if (!city) {
      console.log('City not found');
      return null;
    }

    // Clean and standardize the dietitian data
    const cityDietitians = allDietitians
      .filter(d => d.cityId && city.id && d.cityId.toString() === city.id.toString())
      .map(d => ({
        ...d,
        // Clean up address
        address: d.address === 'ýýýýýý' ? '' : d.address,
        // Ensure specialty exists
        specialty: d.specialty || 'Nutritionist',
        // Clean up Google Maps URL
        googleMapsUrl: d.googleMapsUrl?.split('?')[0] || '',
        // Ensure rating is a number
        rating: typeof d.rating === 'number' ? d.rating : parseFloat(d.rating) || 0,
        // Clean up business name
        businessName: d.businessName || d.name || 'Professional Nutritionist'
      }));

    console.log('Found dietitians:', cityDietitians.length);
    console.log('Sample dietitian:', cityDietitians[0]);

    return {
      city,
      dietitians: cityDietitians
    };
  } catch (error) {
    console.error('Error in getCityData:', error);
    return null;
  }
}

export async function getAllCitiesData() {
  try {
    const citiesPath = path.join(process.cwd(), 'src/data/cities.csv');
    const dietitiansPath = path.join(process.cwd(), 'src/data/dietitians.csv');
    
    // Read both cities and dietitians
    const cities = await readCsvFile<City>(citiesPath);
    const dietitians = await readCsvFile<Dietitian>(dietitiansPath);
    
    // Calculate dietitian count for each city
    return cities.map(city => {
      const cityDietitians = dietitians.filter(d => 
        d.cityId && city.id && d.cityId.toString() === city.id.toString()
      );
      
      return {
        ...city,
        slug: createSeoSlug(city.name),
        dietitianCount: cityDietitians.length // Update the count based on actual dietitians
      };
    });
  } catch (error) {
    console.error('Error in getAllCitiesData:', error);
    return [];
  }
}

export async function getDietitian(slug: string) {
  try {
    const dietitiansPath = path.join(process.cwd(), 'src/data/dietitians.csv');
    const allDietitians = await readCsvFile<Dietitian>(dietitiansPath);
    
    console.log(`Looking for dietitian with slug: ${slug}`);
    const dietitian = allDietitians.find(d => {
      const dietitianSlug = createSeoSlug(d.businessName);
      return dietitianSlug === slug;
    });
    
    if (dietitian) {
      console.log(`Found dietitian: ${dietitian.businessName}`);
      // Clean up the data
      return {
        ...dietitian,
        address: dietitian.address === 'ýýýýýý' ? '' : dietitian.address,
        googleMapsUrl: dietitian.googleMapsUrl?.split('?')[0] || ''
      };
    }
    
    console.log(`Dietitian not found with slug: ${slug}`);
    return null;
  } catch (error) {
    console.error('Error in getDietitian:', error);
    return null;
  }
} 