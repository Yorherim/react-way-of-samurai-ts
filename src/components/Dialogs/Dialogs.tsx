import React, { ChangeEvent } from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {
    ActionsTypes,
    addMessageAC,
    DialogType,
    MessageType,
    updateNewMessageTextAC,
} from "../../redux/store";

type DialogsPropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
    dispatch: (action: ActionsTypes) => void;
};

function Dialogs({
    dialogs,
    messages,
    newMessageText,
    dispatch,
}: DialogsPropsType) {
    const addMessage = () => {
        if (newMessageText.trim()) {
            dispatch(addMessageAC());
        }
    };

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(e.currentTarget.value));
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
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    );
}

export default Dialogs;
