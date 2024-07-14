import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink 
                    to="/Profile" 
                    className={({ isActive }) => 
                        isActive ? `${n.item} ${n.activeLink}` : n.item
                    }
                >
                    Profile
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Dialogs" 
                    className={({ isActive }) => 
                        isActive ? `${n.item} ${n.activeLink}` : n.item
                    }
                >
                    Messages
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/News" 
                    className={({ isActive }) => 
                        isActive ? `${n.item} ${n.activeLink}` : n.item
                    }
                >
                    News
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Music" 
                    className={({ isActive }) => 
                        isActive ? `${n.item} ${n.activeLink}` : n.item
                    }
                >
                    Music
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Settings" 
                    className={({ isActive }) => 
                        isActive ? `${n.item} ${n.activeLink}` : n.item
                    }
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;