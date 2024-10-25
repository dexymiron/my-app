// MyPosts.tsx

import React from "react";
import n from "./MyPosts.module.scss";
import Post from "./Post/Post";
//@ts-ignore
import userNoPhoto from "../../../assets/images/user-no-photo.png";
import AddNewPostForm from "./AddNewPostForm";
import { PostType } from "../../../redux/types/types";

export type MapPropsType = {
  posts: Array<PostType>;
};

export type DispatchPropsType = {
  addPost: (newPostText: string) => void;
};

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo((props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = (newPostText: string) => {
    props.addPost(newPostText);
  };

  return (
    <div className={n.postsBlock}>
      <div className={n.postsImageAndHeader}>
        <img className={n.postsImage} src={userNoPhoto} alt="post-image" />
        <h3 className={n.postsHeader}>My Posts</h3>
      </div>
      <div className={n.InputWithButton}>
        <AddNewPostForm addPost={onAddPost} />
      </div>
      <div className={n.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
