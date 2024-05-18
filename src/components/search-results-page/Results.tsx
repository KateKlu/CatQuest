import FetchData from '../../utils/fetch';
import { FilteredBreeds } from './FilteredBreeds';
import { BreedsResponse } from './search-results.types';

export const Results = () => {
   const { data, error } = FetchData<BreedsResponse[]>(
      'https://api.thecatapi.com/v1/breeds'
   );

   if (error) {
      console.error(`Error fetching fact: ${error.message}`);
      return <p className="message">Some error occurred</p>;
   }
   if (data) {
      console.log('resp');
      console.log(data);
      const filteredData: BreedsResponse[] = data.filter(
         (item: BreedsResponse) => item.reference_image_id
      );
      console.log('filteredData');
      console.log(filteredData);
      return <FilteredBreeds breeds={filteredData} />;
   } else {
      return <p className="message">Loading...</p>;
   }
};
