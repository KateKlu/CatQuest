import { CatQualities } from '../search-page/search.types';

export interface BreedsResponse {
   weight: {
      metric: string;
   };
   id: string;
   name: string;
   vetstreet_url?: string;
   temperament: string;
   origin: string;
   description: string;
   life_span: string;
   adaptability: number;
   affection_level: number;
   child_friendly: number;
   dog_friendly: number;
   energy_level: number;
   grooming: number;
   health_issues: number;
   intelligence: number;
   shedding_level: number;
   social_needs: number;
   stranger_friendly: number;
   vocalisation: number;
   wikipedia_url?: string;
   reference_image_id: string;
}

export interface BreedPhotoUrl {
   url: string;
}

export interface SearchParameters extends Partial<CatQualities> {}
