import React from "react";
import n from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements =
    state.dialogsData &&
    state.dialogsData.map((d) => (
      <DialogItem key={d.id} name={d.name} id={d.id} img={d.image} />
    ));
  let messagesElements =
    state.messagesData &&
    state.messagesData.map((m) => <Message key={m.id} message={m.message} />);
  let newMessageBody = state.newMessageBody;
  let newPostElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (props.isAuth === false) return <Navigate to={"/login/"} />;
  return (
    <div className={n.dialogs}>
      <div className={n.dialogItems}>{dialogsElements}</div>
      <div className={n.messagesLeft}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Введите своё сообщение"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
      <div className={n.messagesRight}>
        <div>{messagesElements}</div>
        <div>
          <textarea ref={newPostElement}></textarea>
          <div>
            <button onClick={onSendMessageClick}>click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
