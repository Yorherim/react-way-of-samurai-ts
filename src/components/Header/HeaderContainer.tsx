import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Header from "./Header";
import { AppStateType } from "../../redux/redux-store";
import { authActions } from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((res) => {
                const { id, email, login } = res.data.data;
                if (res.data.resultCode === 0) {
                    this.props.setUserData(id, email, login);
                }
            })
            .catch((err) => console.error(err));
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />;
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { setUserData } = authActions;

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {
    setUserData,
};

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
