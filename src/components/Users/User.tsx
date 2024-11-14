import React from "react";
import n from "./Users.module.scss";
//@ts-ignore
import userPhoto from "../../assets/images/User.webp";
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/types/types";

import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PropsType = {
  user: UserType
  followingInProgress: number[]
  follow: (userId:number) => void
  unfollow: (userId:number) => void
  showButton?: boolean
}

let User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow, showButton = true }) => {

  /* Toastify */
  const tostFollowUnfollow = (type: 'success' | 'info', text: string) => {
    toast[type](text, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  }
  return (
    <div className={n.UserBlock}>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={n.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <span style={{marginInline: '10px'}}>
        <span>
          <div style={{fontSize: '18px', color: '#1677ff', marginBottom: '5px'}}><b style={{color: '#002140'}}>Nickname:</b> {user.name}</div>
          <div style={{color: 'rgba(0, 0, 0, 0.5)'}}>{user.status}</div>
          {/* <div>{user.id}</div> */}
        </span>
        {/* <span>
          <div>{user.location?.country}</div>
          <div>{user.location?.city}</div>
        </span> */}
      </span>
        {showButton && (<div className={n.followUnfollowButton}>
          {user.followed ? (
            <button className={n.unfollowBtn}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
                tostFollowUnfollow('info', `You unfollowed ${user.name}`);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button className={n.followBtn}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
                tostFollowUnfollow('success', `You followed ${user.name}`);
              }}
            >
              Follow
            </button>
          )}
        </div>
        )}
    </div>
  );
};

export default User;
