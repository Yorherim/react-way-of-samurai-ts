import React from "react";

import classes from "./Dialogs.module.scss";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={`${classes.item} ${classes.active}`}>
                    Andrey
                </div>
                <div className={classes.item}>Oleg</div>
                <div className={classes.item}>Sveta</div>
                <div className={classes.item}>Valera</div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>What's up?</div>
            </div>
        </div>
    );
}

export default Dialogs;
