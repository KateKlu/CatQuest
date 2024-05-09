import { Link } from 'react-router-dom';
import cat from '../../img/CatFactsPage/cat5.jpg';

export const Results = () => {
   return (
      <div className="results">
         <Link to="/breed">
            <figure key={'1'} className="result">
               <img src={cat} alt="Cat photo" className="result-img" />
               <figcaption className="result-name">{'Burmese'}</figcaption>
            </figure>
         </Link>
      </div>
   );
};
