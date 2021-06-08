import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = <T extends object>(
    Component: ComponentType<T>
) => {
    function RedirectComponent(props: MapStateToPropsType) {
        const { isAuth, ...restProps } = props;
        return !props.isAuth ? (
            <Redirect to="/login" />
        ) : (
            <Component {...(restProps as T)} />
        );
    }

    return connect(mapStateToProps)(RedirectComponent);
};
