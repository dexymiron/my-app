import React from "react";
import n from "./Users.module.css";
import userPhoto from "../../assets/images/User.webp";
import { NavLink } from "react-router-dom";
import { deleteUserAPI, postUserAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? n.selectedPage : undefined}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={n.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFolowingProgress(true, u.id);
                    deleteUserAPI.deleteUsers(u.id).then((responce) => {
                      if (responce.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFolowingProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFolowingProgress(true, u.id);
                    postUserAPI.postUsers(u.id).then((responce) => {
                      if (responce.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFolowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{u.id}</div>
            </span>
            <span>
              <div>{u.location?.country}</div>
              <div>{u.location?.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
