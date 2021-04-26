import React, { ChangeEvent } from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";

function Dialogs({
    dialogs: { dialogsData, messagesData, newMessageText },
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
                {dialogsData.map((d) => (
                    <DialogItem key={d.id} name={d.name} id={d.id} />
                ))}
            </div>

            <div className={classes.messages}>
                {messagesData.map((m) => (
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
