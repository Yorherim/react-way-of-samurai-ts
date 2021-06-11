import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

import Profile from "./Profile";
import { AppStateType } from "../../redux/redux-store";
import {
    getProfileTC,
    getStatusTC,
    updateStatusTC,
} from "../../redux/reducers/profile-reducer";
import Preloader from "../common/Preloader/Preloader2";

type PathParamsType = {
    userId: string;
};
type MapStateToPropsType = ReturnType<typeof MapStateToProps>;
type MapDispatchToPropsType = {
    getProfileTC: (userId: number) => void;
    getStatusTC: (userId: number) => void;
    updateStatusTC: (status: string) => void;
};
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
    OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const {
            match,
            profile,
            getProfileTC,
            getStatusTC,
            authorizedUserId,
        } = this.props;

        const userId = match.params.userId
            ? +match.params.userId
            : authorizedUserId;

        if (userId && (!profile || userId !== profile.userId)) {
            getProfileTC(userId);
            getStatusTC(userId);
        }
    }

    updateStatus = (status: string) => this.props.updateStatusTC(status);

    render() {
        const { profile, isFetching, status, isAuth, match } = this.props;

        return (
            <>
                {!isAuth && !match.params.userId ? (
                    <Redirect to={"/login"} />
                ) : isFetching ? (
                    <Preloader />
                ) : (
                    <Profile
                        profile={profile}
                        status={status}
                        updateStatus={this.updateStatus}
                        isAuth={isAuth}
                    />
                )}
            </>
        );
    }
}

const MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
});

export default compose<ComponentType>(
    connect(MapStateToProps, {
        getProfileTC,
        getStatusTC,
        updateStatusTC,
    }),
    withRouter
)(ProfileContainer);
