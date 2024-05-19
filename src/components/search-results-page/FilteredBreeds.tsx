import { ResultElement } from './ResultElement';
import useFilterBreeds from './useFilterBreeds';
import { BreedsResponse } from './search-results.types';

interface FilteredBreedsProps {
   breeds: BreedsResponse[];
}

export const FilteredBreeds: React.FC<FilteredBreedsProps> = ({ breeds }) => {
   const filteredBreeds = useFilterBreeds(breeds);
   console.log('filterad');
   console.log(filteredBreeds);
   return (
      <div className="results">
         {filteredBreeds.length === 0 && (
            <p>Nothing found. Try changing your search parameters</p>
         )}
         <ul className='results-list'>
            {filteredBreeds.map((item) => (
               <ResultElement key={item.reference_image_id} breedInfo={item} />
            ))}
         </ul>
      </div>
   );
};
