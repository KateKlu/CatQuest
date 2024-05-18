import { PhotoSlider } from './PhotoSlider';
import { BreedDescription } from './BreedDescription';
import './breed-page.css';
import { useLocation } from 'react-router-dom';

function BreedPage() {
   const { state } = useLocation();
   const breedInfo = { ...state.parameters };
   console.log(breedInfo);

   return (
      <div className="container breed-page">
         <PhotoSlider />
         <h1 className="breed-name">{breedInfo.name}</h1>
         <BreedDescription breedInfo={breedInfo} />
         <button className="btn">Back</button>
      </div>
   );
}

export default BreedPage;
