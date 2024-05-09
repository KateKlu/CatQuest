import { Link } from 'react-router-dom';
import homeImg from '../../img/home-page-cat.jpg';
import './home-page.css';

function HomePage() {
   return (
      <div className="home">
         <h1 className="app-title">CatQuest</h1>
         <img src={homeImg} alt="Two funny kittens" className="home-img" />
         <div className="btn-block">
            <button className="btn">
               <Link to="search">Choose breed</Link>
            </button>
            <button className="btn">
               <Link to="search-breed">Breed info</Link>
            </button>
            <button className="btn">
               <Link to="cat-facts">Cat facts</Link>
            </button>
         </div>
      </div>
   );
}

export default HomePage;
