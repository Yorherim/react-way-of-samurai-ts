import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./Login";
import { loginTC } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    loginTC: (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => void;
};
type LoginContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class LoginContainer extends React.Component<LoginContainerPropsType> {
    login = (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => this.props.loginTC(email, password, rememberMe);

    render() {
        return this.props.isAuth ? (
            <Redirect to={"/profile"} />
        ) : (
            <Login login={this.login} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    loginTC,
})(LoginContainer);
