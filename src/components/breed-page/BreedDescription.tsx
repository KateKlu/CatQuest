import { BreedCharacteristics } from './BreedCharacteristics';

export const BreedDescription = () => {
   return (
      <div className="breed-description">
         <ul className="general">
            <li>weight: 3 - 5 kg</li>
            <li>life span: 14 - 15</li>
            {/* <li>country of origin: Egypt</li> */}
         </ul>
         <p className="description">
            Temperament: Active, Energetic, Independent, Intelligent, Gentle
         </p>
         <BreedCharacteristics />
         <p className="description">
            The Abyssinian is easy to care for, and a joy to have in your home.
            They’re affectionate cats and love both people and other animals.
         </p>
         <ul className="sorce-links">
            <li>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  {'VetStreet >>>'}
               </a>
            </li>
            <li>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  {'Wikipedia >>>'}
               </a>
            </li>
         </ul>
      </div>
   );
};
