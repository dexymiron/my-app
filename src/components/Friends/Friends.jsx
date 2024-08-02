import React from 'react';
import n from './Friends.module.css';

const Friends = (props) => {
  debugger;
  const friendsElements = props.sidebar.map(friend => (
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
