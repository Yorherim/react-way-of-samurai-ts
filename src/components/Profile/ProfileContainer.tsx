import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import { AppStateType } from "../../redux/redux-store";
import { getProfileTC } from "../../redux/reducers/profile-reducer";
import Preloader from "../common/Preloader/Preloader2";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string;
};
type MapStateToPropsType = ReturnType<typeof MapStateToProps>;
type MapDispatchToPropsType = {
    getProfileTC: (userId: number) => void;
};
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
    OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const { match, profile, getProfileTC } = this.props;
        const userId = match.params.userId ? match.params.userId : 2;
        if (!profile || userId !== profile.userId) {
            getProfileTC(+userId);
        }
    }

    render() {
        const { profile, isFetching, isAuth } = this.props;

        if (!isAuth) return <Redirect to={"/login"} />;
        return (
            <>{isFetching ? <Preloader /> : <Profile profile={profile} />}</>
        );
    }
}

const MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
});

export default connect(MapStateToProps, {
    getProfileTC,
})(withRouter(ProfileContainer));
