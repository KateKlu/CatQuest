import { BreedCharacteristics } from './BreedCharacteristics';
import { BreedsResponse } from '../search-results-page/search-results.types';

interface BreedDescriptionProps {
   breedInfo: BreedsResponse;
}

export const BreedDescription: React.FC<BreedDescriptionProps> = ({
   breedInfo,
}) => {
   return (
      <div className="breed-description">
         <ul className="general">
            <li>Weight: {breedInfo.weight.metric} kg</li>
            <li>Life span: {breedInfo.life_span} years</li>
         </ul>
         <p className="description">Temperament: {breedInfo.temperament}</p>

         <BreedCharacteristics breedInfo={breedInfo} />
         <p className="description">{breedInfo.description}</p>
         <ul className="sorce-links">
            <li>
               <a
                  href={breedInfo.vetstreet_url}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {'VetStreet >>>'}
               </a>
            </li>
            <li>
               <a
                  href={breedInfo.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {'Wikipedia >>>'}
               </a>
            </li>
         </ul>
      </div>
   );
};
