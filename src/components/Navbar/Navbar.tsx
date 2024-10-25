import React from "react";
import n from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
//@ts-ignore
import SidebarContainer from "../Friends/SidebarContainer";
//@ts-ignore
import { ReactComponent as Border } from "../../assets/images/icons/border.svg";

type NavBarPropsType = {
  
}

const Navbar: React.FC<NavBarPropsType> = (props) => {
  return (
    <nav className={n.nav}>
      <div className={n.buttonContainer}>
        <NavLink
          to="/Profile"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Profile</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink
          to="/Dialogs"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Messages</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>News</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Music</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Users</span>
          </button>
        </NavLink>
      </div>
      <div className={n.buttonContainer}>
        <NavLink
          to="/Settings"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
          <button className={n.btn}>
            <Border className={n.svg} />
            <span className={n.btnText}>Settings</span>
          </button>
        </NavLink>
      </div>
      <div className={`${n.buttonContainer} ${n.itemFriends}`}>
        <NavLink
          to="/Friends"
          className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
        >
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
