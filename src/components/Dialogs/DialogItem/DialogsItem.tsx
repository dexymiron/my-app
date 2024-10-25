import React from "react";
import n from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

type DialogItemProps = {
  key: number 
  name: string | undefined
  id: number
  img: string | undefined
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${n.dialog} ${n.active}`}>
      <NavLink to={path}>
        <img src={props.img} alt="dialog avatar" className={n.dialogImg} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
