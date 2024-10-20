import React from "react";
import n from "./Friends.module.scss";
import SwiperComponent from "../common/Swiper/Swiper";

const Friends = (props) => {
  const friendsElements = props.sidebar.map((friend) => (
    <span key={friend.id} className={n.friend}>
      {friend.name}
    </span>
  ));
  return (
    <div className={n.friends}>
      {/* {friendsElements} */}
      <div>
        <SwiperComponent friendsElements={friendsElements} />
      </div>
    </div>
  );
};

export default Friends;
