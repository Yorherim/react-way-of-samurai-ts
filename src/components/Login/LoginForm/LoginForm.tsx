import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { Input } from "../../common/FormsControls/FormsControl";
import { requiredField } from "../../../utils/validators/validators";

export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    type={"password"}
                    placeholder={"Password"}
                    name={"password"}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={"input"}
                    type={"checkbox"}
                    name={"rememberMe"}
                />{" "}
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(
    LoginForm
);
