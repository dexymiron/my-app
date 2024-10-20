import { connect } from "react-redux";
import Friends from "./Friends";
import SwiperComponent from "../common/Swiper/Swiper";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar.sidebarFriends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Friends);

export default SidebarContainer;
