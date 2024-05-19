import { useMemo } from 'react';
import { useCatQualitiesContext } from '../useCatQualitiesContext';
import { BreedsResponse, SearchParameters } from './search-results.types';

export function useFilterBreeds(breeds: BreedsResponse[]) {
   const { catQualities } = useCatQualitiesContext();

   console.log('context');
   console.log(catQualities);

   const searchParameters: SearchParameters = useMemo(() => {
      console.log('start params');
      const params: SearchParameters = Object.keys(catQualities).reduce(
         (acc: SearchParameters, item) => {
            if (
               (item === 'grooming' ||
                  item === 'health_issues' ||
                  item === 'shedding_level') &&
               catQualities[item] < 5
            ) {
               acc[item] = catQualities[item];
            } else if (
               item !== 'grooming' &&
               item !== 'health_issues' &&
               item !== 'shedding_level' &&
               catQualities[item] > 1
            ) {
               acc[item] = catQualities[item];
            }
            return acc;
         },
         {} as SearchParameters
      );

      console.log('finish params');
      console.log(params);
      return params;
   }, [catQualities]);

   const filteredBreeds = useMemo(() => {
      console.log('start filter');
      if (Object.keys(searchParameters).length === 0) {
         return breeds;
      }

      console.log('contin......');

      const compareBreedQualities = (breed: BreedsResponse): boolean => {
         let matched = true;

         for (const item in searchParameters) {
            const searchValue = searchParameters[item] as number;
            const breedValue = breed[item as keyof BreedsResponse] as number;
            if (
               item === 'grooming' ||
               item === 'health_issues' ||
               item === 'shedding_level'
            ) {
               if (breedValue > searchValue) {
                  matched = false;
                  break;
               }
            } else {
               if (breedValue < searchValue) {
                  matched = false;
                  break;
               }
            }
         }
         return matched;
      };

      const filtered = breeds.filter((breed) => compareBreedQualities(breed));

      console.log('finish filteredBreeds ');
      console.log(filtered);

      return filtered;
   }, [searchParameters]);

   return filteredBreeds;
}

export default useFilterBreeds;
