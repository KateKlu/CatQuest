import { PhotoSlider } from './PhotoSlider';
import { BreedDescription } from './BreedDescription';
import './breed-page.css';

function BreedPage() {
   return (
      <div className="breed-page">
         <h1 className="breed-name">Burmese</h1>
         <PhotoSlider />
         <BreedDescription />
         <button className="btn">Back</button>
      </div>
   );
}

export default BreedPage;
