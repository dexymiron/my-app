import React from 'react';
import n from './Friends.module.css';

const Friends = (props) => {
   const friendsElements = props.friendsData.map(friend => (
    <span key={friend.id} className={n.friend}>
            {friend.name}
        </span>
  ))
    return ( 
      <div className={n.friends}>
        {friendsElements}
      </div>
    )
}

export default Friends;