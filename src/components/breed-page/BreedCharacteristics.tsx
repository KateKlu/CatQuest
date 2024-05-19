import { LabelNames } from '../search-page/search.types';
import { BreedsResponse } from '../search-results-page/search-results.types';

interface BreedCharacteristicsProps {
   breedInfo: BreedsResponse;
}

export const BreedCharacteristics: React.FC<BreedCharacteristicsProps> = ({
   breedInfo,
}) => {
   const labelNames: LabelNames = {
      adaptability: 'Adaptability',
      affection_level: 'Affection level',
      child_friendly: 'Child friendly',
      dog_friendly: 'Dog friendly',
      stranger_friendly: 'Stranger friendly',
      intelligence: 'Intelligence',
      energy_level: 'Energy level',
      social_needs: 'Social needs',
      grooming: 'Grooming',
      shedding_level: 'Shedding level',
      health_issues: 'Health issues',
      vocalisation: 'Vocalisation',
   };

   return (
      <>
         <ul className="characteristics-list">
            {Object.keys(labelNames).map((item) => (
               <li key={item} className="breed-characteristic">
                  {labelNames[item]}
                  <div className="points-block">
                     {[...Array(breedInfo[item as keyof BreedsResponse])].map(
                        (_, index) => (
                           <div
                              key={index}
                              className="point active-point"
                           />
                        )
                     )}
                     {[
                        ...Array(
                           5 - Number(breedInfo[item as keyof BreedsResponse])
                        ),
                     ].map((_, index) => (
                        <div key={index} className="point" />
                     ))}
                  </div>
               </li>
            ))}
         </ul>
      </>
   );
};
