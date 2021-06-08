import React from "react";

import classes from "./FormControl.module.scss";

type FormsControlType = {};

export function Textarea({ input, meta: { touched, error }, ...props }: any) {
    const hasError = touched && error;

    return (
        <div
            className={
                classes.formControl + " " + (hasError ? classes.error : "")
            }
        >
            <textarea {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    );
}
