import { getCityData, getDietitian } from '../../../../lib/serverUtils';
import { notFound } from 'next/navigation';
import ProfessionalTemplate from '@/components/templates/ProfessionalTemplate';

type Props = {
  params: Promise<{
    city: string;
    id: string;
  }>;
};

export default async function DietitianProfile({ params }: Props) {
  const { city, id } = await params;
  
  const cityData = await getCityData(city);
  const dietitian = await getDietitian(id);

  if (!cityData || !dietitian) {
    notFound();
  }

  return <ProfessionalTemplate city={cityData.city} dietitian={dietitian} />;
}

// Add this function to generate all possible paths at build time
export async function generateStaticParams() {
  // You'll need to return an array of all possible combinations of city and id
  // Example:
  return [
    { city: 'new-york', id: '1' },
    { city: 'los-angeles', id: '2' },
    // ... add all your possible combinations
  ]
} 