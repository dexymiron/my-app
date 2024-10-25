import React from "react";
import n from "./../Dialogs.module.scss";

type MessagePropsType = {
  message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
  return <div className={n.dialog}>{props.message}</div>;
};

export default Message;
