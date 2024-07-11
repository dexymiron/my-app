import React from 'react';
import n from './DIalogs.module.css'

const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogItems}>
                <div className={n.dialog + '' + n.active}>
                    Dimych
                </div>
                <div className={n.dialog}>
                    Andery
                </div>
                <div className={n.dialog}>
                    Sveta
                </div>
                <div className={n.dialog}>
                    Victor
                </div>
                <div className={n.dialog}>
                    Valera
                </div>
                <div className={n.messages}>
                    <div className={n.message}>Hi</div>
                    <div className={n.message}>What are you doing?</div>
                    <div className={n.message}>Hey</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;