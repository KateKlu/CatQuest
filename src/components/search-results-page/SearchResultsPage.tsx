import { Link } from 'react-router-dom';
import { Results } from './Results';
import './search-results-page.css';

function SearchResultsPage() {
   return (
      <div className="container search-breed-result">
         <h1>Search results</h1>
         <Results url="https://api.thecatapi.com/v1/breeds" />
         <Link to="/search">
            <button className="btn">Back</button>
         </Link>
      </div>
   );
}

export default SearchResultsPage;
