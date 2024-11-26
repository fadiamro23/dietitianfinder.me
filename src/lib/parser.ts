import { createReadStream } from 'fs';
import csv from 'csv-parser';
import type { City, Dietitian } from './types';

export function parseCsvFile<T extends City | Dietitian>(filePath: string): Promise<T[]> {
  const results: T[] = [];
  
  return new Promise((resolve, reject) => {
    createReadStream(filePath)
      .pipe(csv({
        mapValues: ({ header, value }) => {
          if (header === 'specialties') {
            return value.split(',');
          }
          if (header === 'experience' || header === 'dietitianCount' || 
              header === 'latitude' || header === 'longitude' || 
              header === 'rating') {
            return Number(value);
          }
          return value;
        }
      }))
      .on('data', (data: T) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
} 