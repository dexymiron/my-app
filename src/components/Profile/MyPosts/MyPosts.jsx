import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  {id: 1, message:'Hi how are you?' , likesCount: 15},
  {id: 2, message:'It\'s my first project', likesCount: 25},
  {id: 3, message:'It\'s my first project', likesCount: 35},
  {id: 4, message:'It\'s my first project', likesCount: 45},
]

const MyPosts = () => {
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
        <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>
        <Post id={postsData[3].id} message={postsData[3].message} likesCount={postsData[3].likesCount}/>
      </div>
    </div>);
}

export default MyPosts;