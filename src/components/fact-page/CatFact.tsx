import { useEffect, useState } from 'react';
import { FetchData } from './fetch';
import './fact-page.css';

interface CatFact {
   fact: string;
}

export const CatFact = () => {
   const [catFact, setCatFact] = useState<string>('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data: CatFact = await FetchData('https://catfact.ninja/fact');
            setCatFact(data.fact);
         } catch (error) {
            console.error('Error fetching cat fact:', error);
         }
      };

      fetchData();
   }, []);

   return <p className="fact-text">{catFact}</p>;
};
