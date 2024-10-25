import { connect } from "react-redux";
import Friends from "./Friends";
//@ts-ignore
import SwiperComponent from "../common/Swiper/Swiper";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    sidebar: state.sidebar.sidebarFriends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Friends);

export default SidebarContainer;
