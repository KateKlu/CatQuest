import CatQualityInput from './CatQualityInput';
import { LabelNames } from './search.types';

export const CatQualities = () => {
   const labelNames: LabelNames = {
      child_friendly: 'child friendly',
      dog_friendly: 'dog friendly',
      energy_level: 'energy level',
      grooming: 'grooming',
      health_issues: 'health issues',
      intelligence: 'intelligence',
      shedding_level: 'shedding level',
      social_needs: 'social needs',
      stranger_friendly: 'stranger friendly',
   };

   return (
      <form action="" className="search-form">
         <ul className="cat-qualities">
            {Object.keys(labelNames).map((item: string) => (
               <li key={item} className="cat-quality">
                  <label className="cat-quality-input">
                     {labelNames[item]}
                     <CatQualityInput quality={item} />
                  </label>
               </li>
            ))}
         </ul>
      </form>
   );
};
