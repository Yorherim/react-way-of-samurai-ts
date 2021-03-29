import React, { createRef } from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { DialogType, MessageType } from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
};

function Dialogs({ dialogs, messages }: DialogsPropsType) {
    const newMessage = createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        if (newMessage.current?.value) {
            alert(newMessage.current.value);
            newMessage.current.value = "";
        }
    };

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

                <div className={classes.textarea}>
                    <textarea ref={newMessage} />
                </div>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    );
}

export default Dialogs;
