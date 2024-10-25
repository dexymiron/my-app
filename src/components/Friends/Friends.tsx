import React from "react";
import n from "./Friends.module.scss";
//@ts-ignore
import SwiperComponent from "../common/Swiper/Swiper";

type FriendType = {
  id: number;
  name: string;
};

type FriendsPropsType = {
  sidebar: Array<FriendType>;
};

const Friends: React.FC<FriendsPropsType> = (props) => {
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
