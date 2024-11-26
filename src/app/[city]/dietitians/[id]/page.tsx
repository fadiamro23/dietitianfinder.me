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