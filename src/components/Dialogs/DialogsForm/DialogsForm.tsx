import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import classes from "./DialogsForm.module.scss";

import { Textarea } from "../../common/FormsControls/FormsControl";
import {
    maxLengthCreator,
    requiredField,
} from "../../../utils/validators/validators";

export type DialogsFormDataType = {
    message: string;
};

const maxLength50 = maxLengthCreator(50);

const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.wrapperTextarea}>
                <Field
                    component={Textarea}
                    name={"message"}
                    placeholder={"Enter your message..."}
                    validate={[requiredField, maxLength50]}
                />
            </div>
            <button>Add</button>
        </form>
    );
};

export const DialogsReduxForm = reduxForm<DialogsFormDataType>({
    form: "addMessage",
})(DialogsForm);
