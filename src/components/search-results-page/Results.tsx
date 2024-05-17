import FetchData from '../../utils/fetch';
import { CatQualities } from '../search-page/search.types';
import { ResultElement } from './ResultElement';
import { BreedsResponse } from './search-results.types';

interface ResultsProps {
   searchParametrs: CatQualities;
}

export const Results: React.FC<ResultsProps> = ({ searchParametrs }) => {
   console.log(searchParametrs);
   const { data, error } = FetchData<BreedsResponse[]>(
      'https://api.thecatapi.com/v1/breeds'
   );

   if (error) {
      console.error(`Error fetching fact: ${error.message}`);
      return <p className="fact-text">Some error occurred</p>;
   }
   if (data) {
      const filteredData: BreedsResponse[] = data.filter(
         (item: BreedsResponse) => item.reference_image_id
      );
      console.log(data);
      return (
         <div className="results">
            <ul>
               {filteredData.map((item) => (
                  <ResultElement breedInfo={item} />
               ))}
            </ul>
         </div>
      );
   } else {
      return <p className="fact-text">Loading...</p>;
      console.log('loading...');
   }
};
