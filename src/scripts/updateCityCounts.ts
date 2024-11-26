import * as fs from 'fs/promises';
import * as path from 'path';
import csv from 'csv-parser';
import { createReadStream } from 'fs';
import type { City, Dietitian } from '../lib/types';

const CITIES_FILE = path.join(process.cwd(), 'src/data/cities.csv');
const DIETITIANS_FILE = path.join(process.cwd(), 'src/data/dietitians.csv');

async function readCsv<T>(filePath: string): Promise<T[]> {
  const results: T[] = [];
  return new Promise((resolve, reject) => {
    createReadStream(filePath, { encoding: 'utf-8' })
      .pipe(csv())
      .on('data', (data: T) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

async function updateDietitianCounts() {
  try {
    console.log('Reading CSV files...');
    const cities = await readCsv<City>(CITIES_FILE);
    const dietitians = await readCsv<Dietitian>(DIETITIANS_FILE);

    console.log('Calculating counts...');
    const cityCounts = new Map<string, number>();
    dietitians.forEach(dietitian => {
      if (dietitian.cityId) {
        const count = cityCounts.get(dietitian.cityId) || 0;
        cityCounts.set(dietitian.cityId, count + 1);
      }
    });

    console.log('Current counts for cities:');
    cities.forEach(city => {
      const actualCount = cityCounts.get(city.id) || 0;
      if (city.dietitianCount !== actualCount) {
        console.log(`${city.name}: Listed count: ${city.dietitianCount}, Actual count: ${actualCount}`);
      }
    });

    console.log('\nUpdating city counts...');
    const updatedCities = cities.map(city => ({
      ...city,
      dietitianCount: cityCounts.get(city.id) || 0
    }));

    // Write back to CSV
    const headers = Object.keys(updatedCities[0]).join(',') + '\n';
    const rows = updatedCities.map(city => 
      Object.values(city).map(value => 
        typeof value === 'string' && value.includes(',') ? `"${value}"` : value
      ).join(',') + '\n'
    );

    await fs.writeFile(CITIES_FILE, headers + rows.join(''));
    console.log('City dietitian counts updated successfully!');
    
    // Log the updated counts for verification
    console.log('\nUpdated counts:');
    updatedCities.forEach(city => {
      const count = cityCounts.get(city.id) || 0;
      if (count > 0) {
        console.log(`${city.name}: ${count} dietitians`);
      }
    });
  } catch (error) {
    console.error('Error updating city counts:', error);
    process.exit(1);
  }
}

// Run the update
updateDietitianCounts(); 