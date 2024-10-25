import React from "react";
import n from "./Header.module.scss";
import { NavLink } from "react-router-dom";
//@ts-ignore
import logo from "../../assets/images/logo-img.png";
//@ts-ignore
import logOut from "../../assets/images/icons/logOut.png";

export type MapPropsType = {
  isAuth: boolean
  login: string | null
  profileImage: string | null
}
export type DispatchPropsType = {
  logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className={n.header}>
      <div className={n.header1200}>
        <div className={n.logoBlock}>
          <img src={logo} className={n.logoImg} alt="pigeon-logo"></img>
          <h1 className={n.logoText}>Social</h1>
        </div>

        <div className={n.loginBlock}>
          {props.isAuth ? (
            <div className={n.loginBlock}>
              <img
                src={props.profileImage || undefined}
                alt="porfileImage"
                className={n.profileImage}
              />
              {props.login} -{" "}
              <button className={n.logOutBtn} onClick={props.logout}>
                <div className={n.LogOutimgContainer}>
                  <img src={logOut} alt="" className={n.logOutImg} />
                </div>
                <h4 className={n.logOutText}> Log out</h4>
              </button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
