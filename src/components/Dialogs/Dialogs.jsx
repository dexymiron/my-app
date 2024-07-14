import React from 'react';
import n from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let dialogsData = [
    {id: 1, name:'Dimych' },
    {id: 2, name:'Andrey' },
    {id: 3, name:'Sveta' },
    {id: 4, name:'Victor' },
    {id: 5, name:'Valera' }
]


let messagesData = [
    {id: 1, message:'Hi' },
    {id: 2, message:'What are you doing?' },
    {id: 3, message:'Hey' },
    {id: 4, message:'Hey' },
    {id: 5, message:'Hey' }
]

const DialogItem = (props) => {
    let path= "/dialogs/" + props.id
    return  (<div className={`${n.dialog} ${n.active}`}>
                <NavLink to={path}>{props.name}</NavLink>
             </div>
    );
}

const Message = (props) => {
    return <div className={n.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={n.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
            </div>
        </div>
    );
}

export default Dialogs;