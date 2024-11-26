import type { Dietitian } from './types';

export async function addNewDietitian(dietitianData: Omit<Dietitian, 'id'>) {
  const response = await fetch('/api/dietitians', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dietitianData),
  });
  return response.json();
}

export async function updateExistingDietitian(id: string, updates: Partial<Dietitian>) {
  const response = await fetch('/api/dietitians', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...updates }),
  });
  return response.json();
}

export async function removeDietitian(id: string) {
  const response = await fetch('/api/dietitians', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return response.json();
} 