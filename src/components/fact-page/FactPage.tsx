import { Link } from 'react-router-dom';
import { CatPhoto } from './CatPhoto';
import { CatFact } from './CatFact';
import './fact-page.css';

function FactPage() {
   return (
      <div className="container fact-page">
         <h1>Did you know that?</h1>
         <div className="container-decktop">
            <CatPhoto />
            <CatFact />
            <Link to="/cat-facts">
               <button className="btn">Back</button>
            </Link>
         </div>
      </div>
   );
}
export default FactPage;
