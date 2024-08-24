import React from "react";
import n from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        {/*  <img
          className={n.image}
          src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          alt="Background"
        /> */}
      </div>
      <div className={n.descriptionBlock}>
        {props.profile.photos?.large ? (
          <img src={props.profile.photos.large} alt="Profile" />
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt="Default avatar"
            className={n.defaultAvatar}
          />
        )}
        <p>{props.profile.fullName}</p>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
