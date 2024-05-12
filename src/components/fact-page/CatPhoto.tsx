import { useEffect, useState } from 'react';
import { FetchData } from './fetch';

// import imgSrc from '../../img/search-breed-cats.jpg';
import './fact-page.css';

interface CatRandomPhoto {
   url: string;
}

export const CatPhoto = () => {
   const [catPhoto, setCatPhoto] = useState<string>('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data: CatRandomPhoto[] = await FetchData(
               'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
            );
            console.log(data);
            setCatPhoto(data[0].url);
            console.log(catPhoto);
         } catch (error) {
            console.error('Error fetching cat fact:', error);
         }
      };

      fetchData();
   }, []);

   return <img src={catPhoto} alt="Random cat image" className="cat-img" />;
};
