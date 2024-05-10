import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { LightDark } from './LightDark';
import './header.css';

function Header() {
   return (
      <nav className="navbar">
         <Link to="/" className="logo-link">
            <img src={logo} alt="App logo" className="logo" />
         </Link>
         <div className="burger-menu-icon">
            <i className="fa-solid fa-bars" />
         </div>
         <ul className="nav-links">
            <li className="nav-link">
               <NavLink
                  to=""
                  className={({ isActive }) =>
                     isActive ? 'active-navlink navlink' : 'navlink'
                  }
               >
                  Home
               </NavLink>
            </li>
            <li className="nav-link">
               <NavLink
                  to="search"
                  className={({ isActive }) =>
                     isActive ? 'active-navlink navlink' : 'navlink'
                  }
               >
                  Choose your breed
               </NavLink>
            </li>
            <li className="nav-link">
               <NavLink
                  to="search-breed"
                  className={({ isActive }) =>
                     isActive ? 'active-navlink navlink' : 'navlink'
                  }
               >
                  Breed info
               </NavLink>
            </li>
            <li className="nav-link">
               <NavLink
                  to="cat-facts"
                  className={({ isActive }) =>
                     isActive ? 'active-navlink navlink' : 'navlink'
                  }
               >
                  Cat facts
               </NavLink>
            </li>
            <li className="nav-link">
               <LightDark />
            </li>
         </ul>
      </nav>
   );
}

export default Header;
