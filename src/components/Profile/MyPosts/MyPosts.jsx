import React from "react";
import n from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            name="newPostText"
            component={Textarea}
            validate={[requiredField, maxLengthCreator(10)]}
            placeholder={"Post message"}
          />
        </div>
        <div>
          <button>Добавить пост</button>
        </div>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={n.postsblock}>
      <h3>Мои посты</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={n.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
