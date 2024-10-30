import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";
import n from "./ProfileInfo.module.scss";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { ProfileType } from "../../../redux/types/types";

type PropsType = {
  profile: ProfileType
  cancelEdit: () => void;
}



const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error, cancelEdit }) => {
  return (
    <form onSubmit={handleSubmit} className={n.MainEditedForm}>
      <div className={n.buttons}>
        <button
          type="button"
          className={n.cancelProfileBtn}
          onClick={cancelEdit}
        >
          Cancel
        </button>
        <button className={n.editProfileBtn}>Save</button>
      </div>
      <div className={n.leftColFormData}>
        {error && <div className={n.formSummaryError}>{error}</div>}
        <div className={n.nameBlock}>
          <b className={n.nameTitle}>Full name</b>:{" "}
          {createField("Full name", "fullName", [], Input)}
        </div>
        <div className={n.LookingJobBlock}>
          <b className={n.LookingJobTitle}>Looking for a job</b>:{" "}
          {createField("", "lookingForAJob", [], Input, {
            type: "checkbox",
          })}
        </div>
        <div className={n.ProfessionalSkillsBlock}>
          <b className={n.ProfessionalSkillsTitle}>My professional skills</b>:
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [requiredField, maxLengthCreator(200)],
            Textarea
          )}
        </div>  
        <div className={n.AboutMeBlock}>
          <b className={n.AboutMeTitle}>About me</b>:
          {createField(
            "About me",
            "aboutMe",
            [requiredField, maxLengthCreator(200)],
            Textarea
          )}
        </div>
      </div>
      <div className={n.Contacts}>
        <b className={n.ContactsTitle}>Contacts</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          if (key === "vk") {
            return null; /* Исключили VK */
          } else if (key === "mainLink") {
            return null; /* Исключили mainLink */
          }
          return (
            <div key={key} className={n.contactBlock}>
              <b className={n.contactTitle}>
                {key}:{" "}
                {createField(
                  key,
                  "contacts." + key,
                  [maxLengthCreator(35)],
                  Input
                )}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
