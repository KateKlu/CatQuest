import FetchData from '../../utils/fetch';
import { CatRandomPhoto } from './fact-page.types';

import './fact-page.css';

export const CatPhoto = () => {
   const { data, error } = FetchData<CatRandomPhoto[]>(
      'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
   );

   if (error) {
      console.error(`Error fetching data: ${error.message}`);
      return <p className="fact-text">Some error occurred</p>;
   }
   if (data) {
      const catPhoto = data[0].url;
      return <img src={catPhoto} alt="Random cat image" className="cat-img" />;
   } else {
      return <p className="fact-text">Loading...</p>;
   }
};
