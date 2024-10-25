import { connect } from "react-redux";
import Navbar from "./Navbar";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        sidebarFriends: state.sidebar.sidebarFriends
    }
  }

const NavbarContainer = connect (mapStateToProps)(Navbar);

export default NavbarContainer;