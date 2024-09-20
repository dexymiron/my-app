import React from "react";
import n from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-no-photo-svg.svg";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import { stopSubmit } from "redux-form";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  saveProfile,
  savePhoto,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = (formData, dispatch) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false); // Возвращаемся в режим просмотра, если успех
      })
      .catch((error) => {
        // Обработка ошибки и отображение через stopSubmit
        const errorMessage = error || "An error occurred while saving profile";
        dispatch(stopSubmit("edit-profile", { _error: errorMessage }));
      });
  };

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
        {/* Если это твой аккаунт отобрази изменение img */}
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {/* Отображение EditMode */}
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => setEditMode(true)}
            profile={profile}
            isOwner={isOwner}
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={n.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
