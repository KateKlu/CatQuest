import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './header.css';
import { BurgerMenu } from './BurgerMenu';

function Header() {
   return (
      <div className="navbar-container">
         <nav className="navbar">
            <Link to="/" className="logo-link">
               <img src={logo} alt="App logo" className="logo" />
            </Link>
            <BurgerMenu />
         </nav>
      </div>
   );
}

export default Header;
