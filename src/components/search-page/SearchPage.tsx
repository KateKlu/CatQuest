import { Link } from 'react-router-dom';
import { CatQualities } from './CatQualities';
import './search-page.css';

function SearchPage() {
   return (
      <div className="container search">
         <h1>What cat is right for you?</h1>
         <p>Choose what is important to you</p>
         <CatQualities />
         <Link to="results">
            {/* <Link to="results" state={{ parameters: catQualities }}> */}
            <button className="btn">Search</button>
         </Link>
      </div>
   );
}

export default SearchPage;
