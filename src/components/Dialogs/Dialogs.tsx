import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsType = {
    id: number;
    name: string;
};

type MessagesType = {
    id: number;
    message: string;
};

const dialogsData: Array<DialogsType> = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
];

const messagesData: Array<MessagesType> = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What's up?" },
];

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>

            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;
