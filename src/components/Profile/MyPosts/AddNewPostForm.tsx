import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//@ts-ignore
import { validationSchema } from "../../common/FormsControls/FormikControls";
import n from "./AddNewPostForm.module.scss";
//@ts-ignore
import userNoPhoto from "../../../assets/images/icons/noPhoto.svg";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PropsType = {
  addPost: (postText: string) => void;
  profileImage: string
}

const AddNewPostForm: React.FC<PropsType> = (props) => {
  /* Toastify */
  const notify = () =>
    toast.success("Post Added!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });

  return (
    <div className={n.AddPostsForm}>
      <Formik
        initialValues={{ newPostText: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          props.addPost(values.newPostText);
          resetForm();
          notify();
        }}
      >
        <Form>
          <div className={n.postsText}>
            <img className={n.postsImage} src={props.profileImage || userNoPhoto} alt="post-image" style={{width: '40px', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'}}/>
              <Field
                name="newPostText"
                as="textarea"
                placeholder="Post message"
                className={n.formInput}
              />
              <ErrorMessage
                name="newPostText"
                component="Form"
                className={n.errorText}
              />
            <button className={n.addPostBtn} type="submit">
              Add Post
            </button>
          </div>
          <div>
            <ToastContainer />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewPostForm;
