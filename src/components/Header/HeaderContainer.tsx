import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { AppStateType } from "../../redux/redux-store";
import { getAuthUserDataTC } from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />;
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void;
};
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    getAuthUserDataTC,
})(HeaderContainer);
