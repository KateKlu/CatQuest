import { NavLink } from 'react-router-dom';
import { LightDark } from './LightDark';
import { useState } from 'react';

export const BurgerMenu = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const handleClick: () => void = () => setIsOpen(!isOpen);

   const changeBurgerIcon = () => {
      if (isOpen) return <i className="fa-solid fa-xmark" />;
      else return <i className="fa-solid fa-bars" />;
   };

   return (
      <>
         <button className="burger-menu-icon" onClick={handleClick}>
            {changeBurgerIcon()}
         </button>
         <ul
            className={isOpen ? 'nav-links is-visible' : 'nav-links'}
            onClick={handleClick}
         >
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
      </>
   );
};
