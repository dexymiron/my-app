import { connect } from "react-redux";
import Friends from "./Friends";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    sidebar: state.sidebar.sidebarFriends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Friends);

export default SidebarContainer;
