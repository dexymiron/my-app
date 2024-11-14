import React, { ChangeEvent } from "react";
import n from "./ProfileInfo.module.scss";
//@ts-ignore
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
//@ts-ignore
import userPhoto from "../../../assets/images/icons/noPhoto.svg";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, ProfileType } from "../../../redux/types/types";

export type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  saveProfile: (profile: ProfileType) => Promise<any>
  savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  saveProfile,
  savePhoto,
}) => {
  let [editMode, setEditMode] = useState(false);
  let [errorMessage, setErrorMessage] = useState(""); // Добавлено состояние для сообщения об ошибке

  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = (formData:ProfileType) => {
    //todo: remove then
    saveProfile(formData)
      .then(() => {
        setEditMode(false); // Возвращаемся в режим просмотра, если успех
        setErrorMessage(""); // Сбрасываем сообщение об ошибке
      })
      .catch((error) => {
        console.error("Error save profile:", error);
        setErrorMessage("Please filled text and try again");
      });
      
  };

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) savePhoto(e.target.files[0]);
  };

  const cancelEdit = () => {
    setEditMode(false); // Отмена режима редактирования
  };

  return (
    <div className={n.profileDataFormWrapper}>
      <div className={n.imageWithChangeWrapper}>
        {/* Если это твой аккаунт отобрази изменение img */}
        <div className={n.bntChangeAvatar}>
          <label htmlFor="imageInput" className={n.chooseAvatarLabel}>
            <div className={n.imageBlock}>
              {profile.photos?.large ? (
                <img
                  src={profile.photos.large}
                  alt="Profile"
                  className={n.avatar}
                />
              ) : (
                <img
                  src={userPhoto}
                  alt="Default avatar"
                  className={n.defaultAvatar}
                />
              )}
            </div>
          </label>

          {isOwner && (
            <input
              className={n.chooseImage}
              id="imageInput"
              type={"file"}
              onChange={onMainPhotoSelected}
            />
          )}
        </div>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          className={n.profileStatus}
        />
      </div>

      <div className={n.NameStatusFormWrapper}>
        <div className={n.profileName}>
          <p>{profile.fullName}</p>
        </div>

        {/* Отображение EditMode */}

        <div className={n.profileDataForm}>
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
              cancelEdit={cancelEdit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => setEditMode(true)}
              profile={profile}
              isOwner={isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {

  const [infoVisibility, setInfoVisibility] = useState(false);

  const toggleInfoVisibility = () => {
    setInfoVisibility(!infoVisibility);
  }


  return (
    <div className={n.profileInfo}>
      <div className={n.editBtnWrapper}>
        {isOwner && (
          <div>
            <button className={n.editProfileBtn} onClick={goToEditMode}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
      <div className={n.profileInfoForm}>
        <div className={n.leftColForm}>
          <div className={n.leftColFormNameContainer}>
            <b className={n.leftColFormName}>Full name:</b> {profile.fullName}
            {/* <hr style={{marginTop: '10px'}}></hr> */}
          </div>
          <div>
            <b>Looking for a job:</b> <span style={{color: 'rgba(0, 0, 0, 0.8'}}>{profile.lookingForAJob ? "yes" : "no"}</span>
          </div>{profile.lookingForAJob && (
            <div className={n.myProffessionalSkillsContainer}>
              <h4 className={n.myProffessionalSkills}>My professional skills:</h4> <span style={{color: 'rgba(0, 0, 0, 0.8'}}>{profile.lookingForAJobDescription}</span>
            </div>
          )}
          <div className={n.aboutMeContainer}>
            <h4 className={n.aboutMe}>About me:</h4> <span style={{color: 'rgba(0, 0, 0, 0.8'}}>{profile.aboutMe}</span>
          </div>
        </div>

        <button onClick={toggleInfoVisibility} className={n.toggleInfoVisibilityBtn}>Show all information ↓</button>

        <div className={`${n.ContactsFormContainer} ${infoVisibility ? n.ContactsFormContainerVisible : ''}`}>
          <div className={n.ContactsFormTitleContainer}>
            <b className={n.ContactsFormTitle}>Contacts:</b>
            <hr style={{marginTop: '10px'}}></hr>
          </div>{" "}
          {Object.keys(profile.contacts).map((key) => {
            if (key === "vk") {
              return null; /* Исключили VK */
            } else if (key === "mainLink") {
              return null; /* Исключили mainLink */
            }
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key as keyof ContactsType]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type ContactsPropsType = {
  contactTitle: string
  contactValue: string | null
}

const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={n.contact}>
      <b>{contactTitle}:</b> <span style={{color: 'rgba(0, 0, 0, 0.8'}}>{contactValue}</span>
    </div>
  );
};

export default ProfileInfo;
