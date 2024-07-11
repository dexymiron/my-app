import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
    <nav className={n.nav}>
      <div className={n.item}>
        <NavLink to="/Profile" activeClassName={n.activeLink}>Profile</NavLink>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to="/Dialogs" activeClassName={n.activeLink}>Messages</NavLink>
      </div >
      <div className={n.item}>
        <NavLink to="/News" activeClassName={n.activeLink}>News</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/Music" activeClassName={n.activeLink}>Music</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/Settings" activeClassName={n.activeLink}>Settings</NavLink>
      </div>
    </nav> 
    )
}

export default Navbar;