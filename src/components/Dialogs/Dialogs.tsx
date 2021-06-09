import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";
import {
    DialogsFormDataType,
    DialogsReduxForm,
} from "./DialogsForm/DialogsForm";

function Dialogs({ dialogsData, messagesData, addMessage }: DialogsPropsType) {
    const addNewMessage = (formData: DialogsFormDataType) => {
        addMessage(formData.message);
        formData.message = "";
    };

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
                <DialogsReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs;
