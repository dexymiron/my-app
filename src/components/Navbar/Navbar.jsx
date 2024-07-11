import React from 'react';
import n from './Navbar.module.css';


const Navbar = () => {
    return <nav className={n.nav}>
    <div className={n.item}>
      <a href="/Profile">Profile</a>
    </div>
    <div className={n.item}>
    <a href="/Dialogs">Messages</a>
    </div >
    <div className={n.item}>
      <a href="/News">News</a>
    </div>
    <div className={n.item}>
      <a href="/Music">Music</a>
    </div>
    <div className={n.item}>
      <a href="/Settings">Settings</a>
    </div>
</nav>
}

export default Navbar;