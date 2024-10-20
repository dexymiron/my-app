import React from "react";
import n from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import SidebarContainer from "../Friends/SidebarContainer";
import { ReactComponent as Border } from "../../assets/images/icons/border.svg";

const Navbar = (props) => {
  return (
    <nav className={n.nav}>
      <div className={n.buttonContainer}>
        <NavLink to="/Profile" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Profile</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink to="/Dialogs" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Messages</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink to="/News" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>News</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink to="/Music" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Music</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink to="/users" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Users</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink to="/Settings" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Settings</span>
          </button>
        </NavLink>
      </div>
      <div className={n.itemFriends}>
        <NavLink to="/Friends" activeClassName={n.activeLink}>
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Friends</span>
          </button>
        </NavLink>
      </div>
      <SidebarContainer />
    </nav>
  );
};

export default Navbar;
