import React from "react";
import n from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-no-photo-svg.svg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  };

  return (
    <div>
      <div className={n.descriptionBlock}>
        {profile.photos?.large ? (
          <img src={profile.photos.large} alt="Profile" className={n.avatar} />
        ) : (
          <img
            src={userPhoto}
            alt="Default avatar"
            className={n.defaultAvatar}
          />
        )}
        <p>{profile.fullName}</p>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
