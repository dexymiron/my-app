import React, { useEffect, useState } from "react";
import n from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
//@ts-ignore
import { ReactComponent as Border } from "../../assets/images/icons/border.svg";
//@ts-ignore
import userBtnIcon from "../../assets/images/icons/usersBtnIcon.png";
//@ts-ignore
import chatBtnIcon from "../../assets/images/icons/chatBtnIcon.png";
//@ts-ignore
import friendsBtnIcon from "../../assets/images/icons/friendsBtnIcon.png";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
//@ts-ignore
import toggleMenuPng from "../../assets/images/toggleMenu.png";
//@ts-ignore
import toggleMenuCancelPng from "../../assets/images/toggleMenuCancel.png";
//@ts-ignore
import noPhotoImg from "../../assets/images/icons/noPhoto.svg";

type NavBarPropsType = {
}

const Navbar: React.FC<NavBarPropsType> = (props) => {

  //UseSelector/UseState/UserEffect for profilePhotoButton
  const profilePhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos?.small || null
  );
  const [image, setImage] = useState<string | null>(profilePhoto);

  useEffect(() => {
    if (profilePhoto) {
      setImage(profilePhoto);
    }
  }, [profilePhoto]);

  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  }

  return (
    /* className={`${n.ContactsFormContainer} ${infoVisibility ? n.ContactsFormContainerVisible : ''}`} */
    <>
    <button onClick={toggleMenuVisibility} className={n.toggleMenuBtn}><img src={menuVisibility ? toggleMenuCancelPng : toggleMenuPng} alt="Menu"></img></button>
      <nav className={`${n.nav} ${menuVisibility ? n.navVisible : ''}`}>
        <div className={n.buttonContainer}>
          <NavLink
            to="/Profile"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <img src={image || noPhotoImg} alt="usersIcon" style={{width: '38px', borderRadius: '50%', position: 'absolute', left: '16px', top: '4px'}}/>
              <Border className={n.svg} />
              <span className={n.btnText}>Profile</span>
            </button>
          </NavLink>
        </div>
        {/* <div className={n.buttonContainer}>
          <NavLink
            to="/Dialogs"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <Border className={n.svg} />
              <span className={n.btnText}>Messages</span>
            </button>
          </NavLink>
        </div> */}
        {/* <div className={n.buttonContainer}>
          <NavLink
            to="/News"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <Border className={n.svg} />
              <span className={n.btnText}>News</span>
            </button>
          </NavLink>
        </div> */}
        {/* <div className={n.buttonContainer}>
          <NavLink
            to="/Music"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <Border className={n.svg} />
              <span className={n.btnText}>Music</span>
            </button>
          </NavLink>
        </div> */}
        <div className={n.buttonContainer}>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <img src={userBtnIcon} alt="usersIcon" style={{position: 'absolute', left: '10px', top: '0'}}/>
              <Border className={n.svg} />
              <span className={n.btnText}>Users</span>
            </button>
          </NavLink>
        </div> 
        {/*
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
        </div> */}
        <div className={n.buttonContainer}>
          <NavLink
            to="/chatpage"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <img src={chatBtnIcon} alt="usersIcon" style={{position: 'absolute', left: '10px', top: '0'}}/>
              <Border className={n.svg} />
              <span className={n.btnText}>Chat</span>
            </button>
          </NavLink>
        </div>
        <div className={n.buttonContainer}>
          <NavLink
            to="/Friends"
            className={({ isActive }) => (isActive ? n.activeLinkBtn : undefined)}
          >
            <button className={n.btn}>
              <img src={friendsBtnIcon} alt="usersIcon" style={{width: '47px', position: 'absolute', left: '10px', top: '0'}}/>
              <Border className={n.svg} />
              <span className={n.btnText}>Friends</span>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
