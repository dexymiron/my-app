import React from "react";
import n from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";

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

  let addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  if (props.isAuth === false) return <Navigate to={"/login/"} />;
  return (
    <div className={n.dialogs}>
      <div className={n.dialogItems}>{dialogsElements}</div>
      <div className={n.messagesLeft}>
        <div>{messagesElements}</div>
        <AddMesssageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMesssageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={n.messageForm}>
        <div>
          <Field
            name="newMessageBody"
            component={Textarea}
            validate={[requiredField, maxLength50]}
            placeholder="Введите своё сообщение"
          />
          <button>Отправить</button>
        </div>
        <div></div>
      </div>
    </form>
  );
};

const AddMesssageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMesssageForm
);

export default Dialogs;
