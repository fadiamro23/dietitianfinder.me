import * as fs from 'fs/promises';
import * as path from 'path';
import csv from 'csv-parser';
import { createReadStream } from 'fs';
import type { City, Dietitian } from '../lib/types';
import { watch } from 'fs';

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

async function updateCounts() {
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
    console.log(`Counts updated at ${new Date().toLocaleString()}`);
  } catch (error) {
    console.error('Error updating counts:', error);
  }
}

function watchFiles() {
  console.log('Starting automatic count updates...');
  
  // Initial update
  updateCounts();

  // Watch for changes in dietitians.csv
  watch(DIETITIANS_FILE, async (eventType, filename) => {
    if (filename) {
      console.log(`Changes detected in ${filename}`);
      await updateCounts();
    }
  });
}

// Start watching
watchFiles(); 