import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import {
    maxLengthCreator,
    requiredField,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControl";

export type MyPostsFormDataType = {
    postText: string;
};

const maxLength10 = maxLengthCreator(10);

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder={"Something write..."}
                    name={"postText"}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <button>Add post</button>
        </form>
    );
};

export const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({
    form: "newPost",
})(MyPostsForm);
