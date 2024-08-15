import React from "react";
import n from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={n.image}
          src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        />
      </div>
      <div className={n.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
    </div>
  );
};

export default ProfileInfo;
