import { useContext } from 'react';
import { CatQualitiesContext } from './CatQualitiesContext';

export const useCatQualitiesContext = () => {
   const context = useContext(CatQualitiesContext);
   if (!context) {
      throw new Error(
         'useCatQualitiesContext must be used within a CatQualitiesProvider'
      );
   }
   return context;
};
