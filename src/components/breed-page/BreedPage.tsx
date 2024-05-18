import FetchData from '../../utils/fetch';
import { BreedsResponse } from '../search-results-page/search-results.types';
import { BreedPageContent } from './BreedPageContent';
import './breed-page.css';
import { useLocation } from 'react-router-dom';

interface RandomBreedRes {
   breeds: BreedsResponse[];
}

function BreedPage() {
   const { state } = useLocation();
   const apiKey = import.meta.env.VITE_API_KEY;

   if (state) {
      const breedInfo = { ...state.parameters };
      console.log(breedInfo);

      return <BreedPageContent breedInfo={breedInfo} />;
   }

   const { data, error } = FetchData<RandomBreedRes[]>(
      `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=true&api_key=${apiKey}`
   );

   if (error) {
      console.error(`Error fetching fact: ${error.message}`);
      return <p className="message">Some error occurred</p>;
   }

   if (data) {
      console.log('resp');
      console.log(data);
      const breedInfo: BreedsResponse = data[0].breeds[0];
      console.log(breedInfo);
      return <BreedPageContent breedInfo={breedInfo} />;
   } else {
      return <p className="message">Loading...</p>;
   }
}

export default BreedPage;
