import React from 'react';
import n from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData && props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.image} />);
  let messagesElements = props.messagesData && props.messagesData.map(m => <Message key={m.id} message={m.message} />);
  let newPostElement = React.createRef();

  return (
    <div className={n.dialogs}>
      <div className={n.dialogItems}>
        {dialogsElements}
      </div>
      <div className={n.messagesLeft}>
        {messagesElements}
      </div>
      <div className={n.messagesRight}>
        {messagesElements}
          <div>
            <textarea ref={newPostElement}></textarea>
            <div>
              <button onClick={ () => { alert(newPostElement.current.value)}}>click</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;