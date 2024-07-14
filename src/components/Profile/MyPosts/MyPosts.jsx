import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
let posts = [
  {id: 1, message:'Hi how are you?' , likesCount: 15},
  {id: 2, message:'It\'s my first project', likesCount: 25},
  {id: 3, message:'It\'s my first project', likesCount: 35},
  {id: 4, message:'It\'s my first project', likesCount: 45},
]

let postsElements = posts.map ( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
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
        { postsElements }
      </div>
    </div>);
}

export default MyPosts;