import React from "react";

import classes from "./FormControl.module.scss";

export function FormControl({
    input,
    children,
    meta: { touched, error },
    ...props
}: any) {
    const hasError = touched && error;

    return (
        <div
            className={
                classes.formControl + " " + (hasError ? classes.error : "")
            }
        >
            {children}
            {hasError && <span>{error}</span>}
        </div>
    );
}

export function Textarea(props: any) {
    const { input, meta, children, ...restProps } = props;

    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
}

export function Input(props: any) {
    const { input, meta, children, ...restProps } = props;

    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
}
