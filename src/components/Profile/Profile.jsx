import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import n from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <div className={n.Profile}>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        saveProfile={props.saveProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
