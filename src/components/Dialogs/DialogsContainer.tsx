import React from "react";

import { ActionsTypes, DialogType, MessageType } from "../../redux/store";
import {
    addMessageAC,
    updateNewMessageTextAC,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
    dispatch: (action: ActionsTypes) => void;
};

function DialogsContainer({
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

    const onMessageChange = (messageText: string) => {
        dispatch(updateNewMessageTextAC(messageText));
    };

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            newMessageText={newMessageText}
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
        />
    );
}

export default DialogsContainer;
