import { BreedDescription } from './BreedDescription';
import { PhotoSlider } from './PhotoSlider';
import { BreedsResponse } from '../search-results-page/search-results.types';

interface BreedPageContentProps {
   breedInfo: BreedsResponse;
}

export const BreedPageContent: React.FC<BreedPageContentProps> = ({
   breedInfo,
}) => {
   return (
      <div className="container breed-page">
         <PhotoSlider breedId={breedInfo.id} />
         <h1 className="breed-name">{breedInfo.name}</h1>
         <BreedDescription breedInfo={breedInfo} />
         <button className="btn">Back</button>
      </div>
   );
};
