import React, { ChangeEvent } from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { DialogType, MessageType } from "../../redux/store";

type DialogsPropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
    addMessage: () => void;
    updateNewMessageText: (messageText: string) => void;
};

function Dialogs({
    dialogs,
    messages,
    newMessageText,
    addMessage,
    updateNewMessageText,
}: DialogsPropsType) {
    const sendMessage = () => addMessage();

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
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
                    <textarea
                        onChange={onMessageChange}
                        value={newMessageText}
                    />
                </div>
                <button onClick={sendMessage}>Add</button>
            </div>
        </div>
    );
}

export default Dialogs;
