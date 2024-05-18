import CatQualityInput from './CatQualityInput';
import { LabelNames } from './search.types';

export const CatQualities = () => {
   const labelNames: LabelNames = {
      child_friendly: 'child friendly',
      dog_friendly: 'dog friendly',
      stranger_friendly: 'stranger friendly',
      intelligence: 'intelligence',
      energy_level: 'energy level',
      social_needs: 'social needs',
      grooming: 'grooming',
      shedding_level: 'shedding level',
      health_issues: 'health issues',
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
