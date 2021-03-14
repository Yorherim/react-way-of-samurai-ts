import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./DialogItem.module.scss";

type PropsType = {
    name: string;
    id: number;
};

function DialogItem({ name, id }: PropsType) {
    return (
        <div className={classes.item}>
            <NavLink to={`/dialogs/${id}`} activeClassName={classes.active}>
                {name}
            </NavLink>
        </div>
    );
}

export default DialogItem;
