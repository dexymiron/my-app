import React from "react";
import n from "./../Dialogs.module.scss";

const Message = (props) => {
  return <div className={n.dialog}>{props.message}</div>;
};

export default Message;
