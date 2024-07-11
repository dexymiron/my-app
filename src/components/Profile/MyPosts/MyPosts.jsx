import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={n.posts}>
        <Post message='Hi how are you?' likes='15'/>
        <Post message="It's my first project" likes='25'/>
        <Post />
        <Post />
      </div>
    </div>);
}

export default MyPosts;