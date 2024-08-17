import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import SidebarContainer from '../Friends/SidebarContainer';

const Navbar = (props) => {
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
                    to="/users"
                    className={n.item}
                    activeClassName={n.activeLink}
                >
                    Users
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
            <SidebarContainer />
        </nav>
    );
}

export default Navbar;