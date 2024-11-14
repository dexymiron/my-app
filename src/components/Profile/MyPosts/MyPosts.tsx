// MyPosts.tsx

import React from "react";
import n from "./MyPosts.module.scss";
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";
import { PostType } from "../../../redux/types/types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../redux/profile-reducer";

import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type MapPropsType = {
  posts: Array<PostType>;
};

export type DispatchPropsType = {
  addPost: (newPostText: string) => void;
};

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo((props) => {

  const dispatch = useDispatch();

  const profileImage = useSelector((state: any) => state.profilePage.profile?.photos?.small)

  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} 
    onRemove={() => {
      dispatch(actions.removePostActionCreator(p.id)); 
      notify();
      }
    }
    />
  ));

  const onAddPost = (newPostText: string) => {
    props.addPost(newPostText);
  };

  /* Toastify */
  const notify = () =>
    toast.info("Post Removed!", {
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
    <div className={n.postsBlock}>
      <div className={n.postsImageAndHeader}>
        <h3 className={n.postsHeader}>My Posts</h3>
      </div>
      <div className={n.InputWithButton}>
        <AddNewPostForm addPost={onAddPost} profileImage={profileImage}/>
      </div>
      <div className={n.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
