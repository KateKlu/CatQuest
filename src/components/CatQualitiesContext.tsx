import { createContext, useState } from 'react';
import { CatQualities } from './search-page/search.types';

interface CatQualitiesContextType {
   catQualities: CatQualities;
   setCatQualities: React.Dispatch<React.SetStateAction<CatQualities>>;
}

interface CatQualitiesProviderProps {
   children: React.ReactNode;
}

export const CatQualitiesContext = createContext<
   CatQualitiesContextType | undefined
>(undefined);

export const CatQualitiesProvider: React.FC<CatQualitiesProviderProps> = ({
   children,
}) => {
   const [catQualities, setCatQualities] = useState<CatQualities>({
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      grooming: 5,
      health_issues: 5,
      intelligence: 1,
      shedding_level: 5,
      social_needs: 1,
      stranger_friendly: 1,
   });

   return (
      <CatQualitiesContext.Provider value={{ catQualities, setCatQualities }}>
         {children}
      </CatQualitiesContext.Provider>
   );
};
