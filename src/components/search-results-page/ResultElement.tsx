import { Link } from 'react-router-dom';
import FetchData from '../../utils/fetch';
import { BreedPhotoUrl, BreedsResponse } from './search-results.types';

interface ResultElementProps {
   breedInfo: BreedsResponse;
}

export const ResultElement: React.FC<ResultElementProps> = ({ breedInfo }) => {
   const getBreedPhoto = () => {
      if (error) {
         console.error(`Error fetching data: ${error.message}`);
         return <p className="message">Some error occurred</p>;
      }
      if (data) {
         const imgSrc = data.url;
         return (
            <img
               src={imgSrc}
               alt={breedInfo.name + ' cat photo'}
               className="result-img"
            />
         );
      } else {
         return <p className="message">Loading...</p>;
      }
   };

   const { data, error } = FetchData<BreedPhotoUrl>(
      `https://api.thecatapi.com/v1/images/${breedInfo.reference_image_id}`
   );

   return (
      <li className='result-element' key={breedInfo.id}>
         <Link to="/breed" state={{ parameters: breedInfo }}>
            <figure className="result">
               {getBreedPhoto()}
               <figcaption className="result-name">{breedInfo.name}</figcaption>
            </figure>
         </Link>
      </li>
   );
};
