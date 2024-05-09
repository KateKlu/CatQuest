import { Link } from 'react-router-dom';
import cat1 from '../../img/CatFactsPage/cat1.jpg';
import cat2 from '../../img/CatFactsPage/cat2.jpg';
import cat3 from '../../img/CatFactsPage/cat3.jpg';
import cat4 from '../../img/CatFactsPage/cat4.jpg';
import cat5 from '../../img/CatFactsPage/cat5.jpg';
import cat6 from '../../img/CatFactsPage/cat6.jpg';

import './cat-facts-page.css';

export function CatImages() {
   return (
      <div className="cat-imgs">
         <Link to="fact" className="fact-link">
            <img src={cat1} alt="" className="cat-small-img" />
         </Link>
         <Link to="fact" className="fact-link">
            <img src={cat2} alt="" className="cat-small-img" />
         </Link>
         <Link to="fact" className="fact-link">
            <img src={cat3} alt="" className="cat-small-img" />
         </Link>
         <Link to="fact" className="fact-link">
            <img src={cat4} alt="" className="cat-small-img" />
         </Link>
         <Link to="fact" className="fact-link">
            <img src={cat5} alt="" className="cat-small-img" />
         </Link>
         <Link to="fact" className="fact-link">
            <img src={cat6} alt="" className="cat-small-img" />
         </Link>
      </div>
   );
}
