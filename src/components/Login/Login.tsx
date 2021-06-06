import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    name={"login"}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    component={"input"}
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

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

function Login() {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;
