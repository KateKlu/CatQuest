import './cat-facts-page.css';
import { CatImages } from './CatImages';

function CatFactsPage() {
   return (
      <div className="cat-facts">
         <div className="conteiner">
            <h1>What do you know about cats?</h1>
            <p className="cats-facts-text">Choose a cat to read a new fact</p>
            <CatImages />
         </div>
      </div>
   );
}

export default CatFactsPage;
