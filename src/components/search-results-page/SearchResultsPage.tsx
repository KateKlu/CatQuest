// import { useLocation } from 'react-router-dom';
import { Results } from './Results';
import './search-results-page.css';

function SearchResultsPage() {
   // const { state } = useLocation();
   // const catQualities = { ...state.parameters };
   // console.log(catQualities);

   return (
      <div className="container search-breed-result">
         <h1>Search results</h1>
         {/* <Results searchParametrs={catQualities} /> */}
         <Results />
         <button className="btn">Back</button>
      </div>
   );
}

export default SearchResultsPage;
