import React, { ChangeEvent } from "react";
import { Redirect } from "react-router-dom";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";

function Dialogs({
    dialogsData,
    messagesData,
    newMessageText,
    addMessage,
    updateNewMessageText,
    isAuth,
}: DialogsPropsType) {
    const sendMessage = () => addMessage();

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
    };

    console.log(isAuth);

    if (!isAuth) return <Redirect to={"/login"} />;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsData.map((d, i) => (
                    <DialogItem key={`${d}_${i}`} name={d.name} id={d.id} />
                ))}
            </div>

            <div className={classes.messages}>
                {messagesData.map((m, i) => (
                    <Message key={`${m}_${i}`} message={m.message} />
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
