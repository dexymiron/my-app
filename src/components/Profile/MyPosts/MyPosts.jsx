import React from "react";
import n from "./MyPosts.module.scss";
import Post from "./Post/Post";
import userNoPhoto from "../../../assets/images/user-no-photo.png";

import AddNewPostForm from "./AddNewPostForm";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (newPostText) => {
    props.addPost(newPostText);
  };

  return (
    <div className={n.postsBlock}>
      <div className={n.postsImageAndHeader}>
        <img className={n.postsImage} src={userNoPhoto} alt="post-image"></img>
        <h3 className={n.postsHeader}>My Posts</h3>
      </div>
      <div className={n.InputWithButton}>
        <AddNewPostForm onSubmit={onAddPost} addPost={onAddPost} />
      </div>

      <div className={n.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
