import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name="Dima" id={1} />
                <DialogItem name="Oleg" id={2} />
                <DialogItem name="Sveta" id={3} />
                <DialogItem name="Valera" id={4} />
            </div>

            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="What's up?" />
            </div>
        </div>
    );
}

export default Dialogs;
