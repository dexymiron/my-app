import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar.sidebarFriends
    }
  };

const SidebarContainer = connect (mapStateToProps)(Friends);

export default SidebarContainer;