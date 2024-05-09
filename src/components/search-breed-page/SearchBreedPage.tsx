import cats from '../../img/search-breed-cats.jpg';
import { BreedByName } from './BreedByName';
import { RandomBreed } from './RandomBreed';

import './search-breed-page.css';

function SearchBreedPage() {
   return (
      <div className="search-breed">
         <h1>Find breed by name</h1>
         <BreedByName />
         <img
            src={cats}
            alt="Funny kittens with balls of thread"
            className="search-cats"
         />

         <RandomBreed />
      </div>
   );
}

export default SearchBreedPage;
