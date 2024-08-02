import React from 'react';
import n from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={n.image} src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' />
    </div>
  );
};


export default ProfileInfo;