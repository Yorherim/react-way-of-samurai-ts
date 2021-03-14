import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Dialogs.module.scss";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.item}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>
                        Andrey
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>
                        Oleg
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>
                        Sveta
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>
                        Valera
                    </NavLink>
                </div>
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
