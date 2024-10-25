import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//@ts-ignore
import { validationSchema } from "../../common/FormsControls/FormikControls";
import n from "./AddNewPostForm.module.scss";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PropsType = {
  addPost: (postText: string) => void;
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
    <div>
      <Formik
        initialValues={{ newPostText: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          props.addPost(values.newPostText);
          resetForm();
        }}
      >
        <Form>
          <div className={n.postsText}>
            <Field
              name="newPostText"
              as="textarea"
              placeholder="Post message"
            />
            <ErrorMessage
              name="newPostText"
              component="Form"
              className={n.errorText}
            />
            <button className={n.addPostBtn} type="submit" onClick={notify}>
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
