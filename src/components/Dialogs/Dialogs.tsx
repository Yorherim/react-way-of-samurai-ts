import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { DialogsType, MessagesType } from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
};

function Dialogs({ dialogs, messages }: DialogsPropsType) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogs.map((d) => (
                    <DialogItem key={d.id} name={d.name} id={d.id} />
                ))}
            </div>

            <div className={classes.messages}>
                {messages.map((m) => (
                    <Message key={m.id} message={m.message} />
                ))}
            </div>
        </div>
    );
}

export default Dialogs;
