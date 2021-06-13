import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { AppStateType } from "../../redux/redux-store";
import { logoutTC } from "../../redux/reducers/auth-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    logoutTC: () => void;
};
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    logout = () => this.props.logoutTC();

    render() {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
                logout={this.logout}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    logoutTC,
})(HeaderContainer);
