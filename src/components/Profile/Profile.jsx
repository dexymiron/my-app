import React from 'react';
import n from './MyPosts/MyPosts.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  <div>
    <div>
      <img src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"></img>
    </div>
    <div>
      Ava+descriprion
    </div>
    <MyPosts/>
  </div>
}

export default Profile;