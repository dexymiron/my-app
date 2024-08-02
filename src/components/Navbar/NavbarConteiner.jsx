import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        sidebarFriends: state.sidebar.sidebarFriends
    }
  }

const NavbarContainer = connect (mapStateToProps)(Navbar);

export default NavbarContainer;