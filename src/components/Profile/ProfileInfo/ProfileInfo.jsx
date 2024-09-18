import React from "react";
import n from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={n.descriptionBlock}>
        {profile.photos?.large ? (
          <img src={profile.photos.large} alt="Profile" />
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt="Default avatar"
            className={n.defaultAvatar}
          />
        )}
        <p>{profile.fullName}</p>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
