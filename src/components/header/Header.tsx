import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './header.css';

function Header() {
   return (
      <>
         <nav className="navbar">
            <Link to="/" className="logo-link">
               <img src={logo} alt="App logo" className="logo" />
            </Link>
            <div className="burger-menu-icon">
               <i className="fa-solid fa-bars" />
            </div>
            <ul className="nav-links">
               <li>
                  <NavLink
                     to=""
                     className={({ isActive }) =>
                        isActive ? 'active-navlink navlink' : 'navlink'
                     }
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="search"
                     className={({ isActive }) =>
                        isActive ? 'active-navlink navlink' : 'navlink'
                     }
                  >
                     Choose your breed
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="search-breed"
                     className={({ isActive }) =>
                        isActive ? 'active-navlink navlink' : 'navlink'
                     }
                  >
                     Breed info
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="cat-facts"
                     className={({ isActive }) =>
                        isActive ? 'active-navlink navlink' : 'navlink'
                     }
                  >
                     Cat facts
                  </NavLink>
               </li>
               <li>Light/Dark</li>
            </ul>
         </nav>
      </>
   );
}

export default Header;
