import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={n.postsblock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={n.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;

