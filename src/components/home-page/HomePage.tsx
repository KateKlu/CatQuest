import { Link } from 'react-router-dom';
import homeImg from '../../img/home-page-cat.jpg';
import './home-page.css';

function HomePage() {
   return (
      <div className="container home ">
         <h1 className="app-title">CatQuest</h1>
         <div className="home-decktop">
            <img src={homeImg} alt="Two funny kittens" className="home-img" />
            <div className="btn-block">
               <Link to="search">
                  <button className="btn">Choose your breed</button>
               </Link>
               <Link to="search-breed">
                  <button className="btn">Breed info</button>
               </Link>
               <Link to="cat-facts">
                  <button className="btn">Cat facts</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default HomePage;
