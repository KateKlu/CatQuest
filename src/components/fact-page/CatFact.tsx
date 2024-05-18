import FetchData from '../../utils/fetch';
import { CatRandomFact } from './fact-page.types';
import './fact-page.css';

export const CatFact = () => {
   const { data, error } = FetchData<CatRandomFact>(
      'https://catfact.ninja/fact'
   );

   if (error) {
      console.error(`Error fetching fact: ${error.message}`);
      return <p className="fact-text">Some error occurred</p>;
   }
   if (data) {
      return <p className="fact-text">{data.fact}</p>;
   } else {
      return <p className="fact-text">Loading...</p>;
   }
};
