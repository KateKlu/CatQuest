import { Link } from 'react-router-dom';
import { CatPhoto } from './CatPhoto';
import { CatFact } from './CatFact';
import './fact-page.css';

function FactPage() {
   return (
      <div className="fact-page">
         <div className="conteiner">
            <h1>Did you know that?</h1>
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
