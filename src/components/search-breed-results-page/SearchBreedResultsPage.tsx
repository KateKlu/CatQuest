import { Link, useLocation } from 'react-router-dom';
import { Results } from '../search-results-page/Results';
import { BreedByName } from '../search-breed-page/BreedByName';
// import './search-breed-results-page.css';

function SearchBreedResultsPage() {
   const { state } = useLocation();
   console.log(state);
   const breedName: string = state.parameters;
   const recUrl: string = `https://api.thecatapi.com/v1/breeds/search?attach_image=1&q=${breedName}`;
   return (
      <div className="container search-breed-result">
         <h1>Search results</h1>
         <BreedByName nameValue={breedName} />
         <Results key={breedName} url={recUrl} />
         <Link to="/search-breed">
            <button className="btn">Back</button>
         </Link>
      </div>
   );
}

export default SearchBreedResultsPage;
