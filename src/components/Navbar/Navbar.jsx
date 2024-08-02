import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Navbar = (props) => {
    const friendsData = props.sidebarFriends;
debugger;
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink 
                    to="/Profile" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Profile
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Dialogs" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Messages
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/News" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    News
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Music" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Music
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink 
                    to="/Settings" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Settings
                </NavLink>
            </div>
            <div className={n.itemFriends}>
                <NavLink 
                    to="/Friends" 
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Friends
                </NavLink>
            </div>
            <Friends friendsData={friendsData} />
        </nav>
    );
}

export default Navbar;
