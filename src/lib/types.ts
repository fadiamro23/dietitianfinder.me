export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  dietitianCount: number;
  latitude: number;
  longitude: number;
}

export type Dietitian = {
  id: string;
  cityId: string;
  name: string;
  businessName: string;
  googleMapsUrl: string;
  rating: number;
  specialty: string;
  address: string;
  phone: string;
  bio: string;
  notes: string;
}

export interface FAQ {
  question: string;
  answer: string;
} 