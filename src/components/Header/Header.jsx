import React from "react";
import n from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={n.header}>
      <img src="https://media.contented.ru/wp-content/uploads/2022/06/logotip.png"></img>

      <div className={n.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
