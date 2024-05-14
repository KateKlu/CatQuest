import { Link } from 'react-router-dom';
import FetchData from '../../utils/fetch';
import { BreedPhotoUrl } from './search-results.types';

interface ResultElementProps {
   breadName: string;
   photoId: string;
}

export const ResultElement: React.FC<ResultElementProps> = ({
   breadName,
   photoId,
}) => {
   const getBreedPhoto = () => {
      if (error) {
         console.error(`Error fetching data: ${error.message}`);
         return <p className="fact-text">Some error occurred</p>;
      }
      if (data) {
         const imgSrc = data.url;
         return (
            <img
               src={imgSrc}
               alt={breadName + ' cat photo'}
               className="result-img"
            />
         );
      } else {
         return <p className="fact-text">Loading...</p>;
      }
   };

   const { data, error } = FetchData<BreedPhotoUrl>(
      `https://api.thecatapi.com/v1/images/${photoId}`
   );

   return (
      <li>
         <Link to="/breed">
            <figure key={photoId} className="result">
               {getBreedPhoto()}
               <figcaption className="result-name">{breadName}</figcaption>
            </figure>
         </Link>
      </li>
   );
};
