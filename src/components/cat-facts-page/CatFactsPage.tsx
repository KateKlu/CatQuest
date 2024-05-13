import './cat-facts-page.css';
import { CatImages } from './CatImages';

function CatFactsPage() {
   return (
      <div className="container cat-facts">
         <h1>What do you know about cats?</h1>
         <p className="cats-facts-text">Choose a cat to read a new fact</p>
         <CatImages />
      </div>
   );
}

export default CatFactsPage;
