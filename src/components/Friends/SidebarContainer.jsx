import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
  };

const SidebarContainer = connect (mapStateToProps)(Friends);

export default SidebarContainer;