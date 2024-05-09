import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CatQualities, LabelNames } from './search.types';
import './search-page.css';

function SearchPage() {
   const [catQualities, setCatQualities] = useState<CatQualities>({
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      grooming: 1,
      health_issues: 1,
      intelligence: 1,
      shedding_level: 1,
      social_needs: 1,
      stranger_friendly: 1,
   });

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

   const handleChangeInputValue = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { name, value } = event.target;
      setCatQualities((prevParams) => ({
         ...prevParams,
         [name]: +value,
      }));
   };

   const createCatQualityInput = (
      labelName: string,
      name: string,
      value: number
   ) => {
      return (
         <li key={name} className="cat-quality">
            <label className="cat-quality-input">
               {labelName}
               <input
                  type="range"
                  id={name}
                  name={name}
                  min="1"
                  max="5"
                  value={value}
                  step="1"
                  onChange={handleChangeInputValue}
               />
            </label>
         </li>
      );
   };

   return (
      <div className="search">
         <h1>Which cat breed is right for you?</h1>
         <p>Choose what is important to you</p>
         <form action="" className="search-form">
            <ul className="cat-qualities">
               {Object.keys(catQualities).map((item: string) =>
                  createCatQualityInput(
                     labelNames[item],
                     item,
                     catQualities[item]
                  )
               )}
            </ul>
            <button className="btn">
               <Link to="results" state={{ parameters: catQualities }}>
                  Search
               </Link>
            </button>
         </form>
      </div>
   );
}

export default SearchPage;
