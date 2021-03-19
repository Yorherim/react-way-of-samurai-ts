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
                {dialogsData.map((d) => (
                    <DialogItem name={d.name} id={d.id} />
                ))}
            </div>

            <div className={classes.messages}>
                {messagesData.map((m) => (
                    <Message message={m.message} />
                ))}
            </div>
        </div>
    );
}

export default Dialogs;
