import { getCityData } from '../../../lib/serverUtils';
import { generateCityFAQs } from '../../../lib/data';
import { notFound } from 'next/navigation';
import CityTemplate from '@/components/templates/CityTemplate';

type Props = {
  params: Promise<{
    city: string;
  }>;
};

export default async function CityDietitians({ params }: Props) {
  const { city } = await params;
  const data = await getCityData(city);
  
  if (!data) {
    notFound();
  }

  const { city: cityData, dietitians } = data;
  const faqs = generateCityFAQs(cityData.name);

  return <CityTemplate city={cityData} dietitians={dietitians} faqs={faqs} />;
} 