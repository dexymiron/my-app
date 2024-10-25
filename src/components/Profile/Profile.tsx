import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//@ts-ignore
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import n from "./Profile.module.scss";
import { ProfileType } from "../../redux/types/types";



type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};


const Profile: React.FC<PropsType> = (props) => {
  if (!props.profile) {
    return null;
  }
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
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
