import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
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
        const { match, profile, getProfileTC, getStatusTC } = this.props;
        const userId = match.params.userId ? +match.params.userId : 15468;
        if (!profile || userId !== profile.userId) {
            getProfileTC(userId);
            getStatusTC(userId);
        }
    }

    updateStatus = (status: string) => this.props.updateStatusTC(status);

    render() {
        const { profile, isFetching, status } = this.props;

        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Profile
                        profile={profile}
                        status={status}
                        updateStatus={this.updateStatus}
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
});

export default compose<ComponentType>(
    connect(MapStateToProps, {
        getProfileTC,
        getStatusTC,
        updateStatusTC,
    }),
    withRouter
)(ProfileContainer);
