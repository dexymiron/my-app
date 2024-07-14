import React from 'react';
import n from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${n.dialog} ${n.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={n.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'Hey'}
    ];

    let dialogsElements = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = messagesData.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={n.dialogs}>
            <div className={n.dialogItems}>
                {dialogsElements}
            </div>
            <div className={n.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;