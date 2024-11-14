import React from "react";
import n from "./Friends.module.scss";
import { useSelector } from "react-redux";
import { getFriends} from "../../redux/users-selectors";
import User from "../Users/User";
//@ts-ignore
import friendsIcon from "../../assets/images/icons/friends.svg"
//@ts-ignore
import noFriendsImg from "../../assets/images/youHaveNoFriendsPng.png";

type FriendType = {
  id: number;
  name: string;
};

type FriendsPropsType = {
  sidebar: Array<FriendType>;
};

const Friends: React.FC<FriendsPropsType> = (props) => {

  const friends = useSelector(getFriends);


  return (
    <div className={n.friends}>
      <div style={{display: 'inline-flex', alignItems: 'center', gap: '30px', marginLeft: '30px'}}>
        <h1 style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', color: 'rgba(0, 0, 0, 0.7)'}}>My Friends</h1>
        <img src={friendsIcon} alt="FriendsLogo" style={{opacity: 0.8}}/>
      </div>
      <hr style={{opacity: '0.7'}}></hr>
      <div className={n.friendsBlock}>
            {friends.length > 0 ? (
                friends.map(friend => ( 
                    <User key={friend.id} user={friend} followingInProgress={[]} follow={() => {}} unfollow={() => {}} showButton={false}
                      />
                ))
            ) : (
              <div style={{gridColumn: '2 / 3'}}>
                <img src={noFriendsImg} alt="noFriendsImage" style={{width: '400px'}}/>
                <h1 className={n.noFriendsMessage}>Ops... You have no friends yet...</h1>
                <hr></hr>
              </div>
            )}
      </div>
      <div>
      </div>

    </div>
  );
};

export default Friends;
