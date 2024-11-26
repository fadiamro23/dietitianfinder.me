import fs from 'fs/promises';
import path from 'path';
import csv from 'csv-parser';
import { createReadStream, createWriteStream } from 'fs';
import type { Dietitian } from '../lib/types';

const DIETITIANS_FILE = path.join(process.cwd(), 'src/data/dietitians.csv');
const TEMP_FILE = path.join(process.cwd(), 'src/data/temp_dietitians.csv');

export async function addDietitian(newDietitian: Omit<Dietitian, 'id'>) {
  const dietitians = await readDietitians();
  const newId = (Math.max(...dietitians.map(d => parseInt(d.id))) + 1).toString();
  
  const dietitianWithId = {
    id: newId,
    ...newDietitian
  };
  
  dietitians.push(dietitianWithId);
  await writeDietitians(dietitians);
  return dietitianWithId;
}

export async function updateDietitian(id: string, updates: Partial<Dietitian>) {
  const dietitians = await readDietitians();
  const index = dietitians.findIndex(d => d.id === id);
  
  if (index === -1) {
    throw new Error(`Dietitian with id ${id} not found`);
  }
  
  dietitians[index] = { ...dietitians[index], ...updates };
  await writeDietitians(dietitians);
  return dietitians[index];
}

export async function deleteDietitian(id: string) {
  const dietitians = await readDietitians();
  const filtered = dietitians.filter(d => d.id !== id);
  await writeDietitians(filtered);
}

async function readDietitians(): Promise<Dietitian[]> {
  return new Promise((resolve, reject) => {
    const results: Dietitian[] = [];
    createReadStream(DIETITIANS_FILE)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

async function writeDietitians(dietitians: Dietitian[]) {
  const headers = Object.keys(dietitians[0]).join(',') + '\n';
  const rows = dietitians.map(d => Object.values(d).join(',') + '\n');
  
  await fs.writeFile(DIETITIANS_FILE, headers + rows.join(''));
} 