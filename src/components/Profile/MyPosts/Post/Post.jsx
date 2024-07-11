import React from 'react';
import n from './Post.module.css';


const Post = (props) => {
    return ( 
        <div className={n.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94-h02nA6tjH-orlYL1CJN7kZ2QCO2ldtww&s'></img>
          { props.message }
          <div>
            <span>like</span> {props.likes} 
          </div> 
        </div> );
}

export default Post;