import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator}  from '../../../redux/state';
import {updateNewPostTextActionCreator}  from '../../../redux/state';




const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={n.postsblock}>
      <h3>Мои посты</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
        </div>
        <div>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={n.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
