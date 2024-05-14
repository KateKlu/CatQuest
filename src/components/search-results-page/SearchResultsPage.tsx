import { Results } from './Results';
import './search-results-page.css';

function SearchResultsPage() {
   return (
      <div className="container search-breed-result">
         <h1>Search results</h1>
         <Results />
         <button className="btn">Back</button>
      </div>
   );
}

export default SearchResultsPage;
