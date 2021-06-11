import React from "react";

import { FormDataType, LoginReduxForm } from "./LoginForm/LoginForm";

type LoginPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => void;
};

function Login({ login }: LoginPropsType) {
    const onSubmit = ({ email, password, rememberMe }: FormDataType) => {
        console.log("onSubmit working");
        login(email, password, rememberMe);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;
