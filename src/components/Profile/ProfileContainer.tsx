import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Profile from "./Profile";
import { AppStateType } from "../../redux/redux-store";
import { profileActions } from "../../redux/reducers/profile-reducer";
import Preloader from "../common/Preloader/Preloader2";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string;
};
type MapStateToPropsType = ReturnType<typeof MapStateToProps>;
type MapDispatchToPropsType = typeof MapDispatchToProps;
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
    OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2;
        if (!this.props.profile || userId !== this.props.profile.userId) {
            this.props.toggleIsFetching(true);
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
                )
                .then((res) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUserProfile(res.data);
                })
                .catch((err) => console.error(err));
        }
    }

    render() {
        const { profile, isFetching } = this.props;
        return (
            <>{isFetching ? <Preloader /> : <Profile profile={profile} />}</>
        );
    }
}

const { setUserProfile, toggleIsFetching } = profileActions;

const MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
});
const MapDispatchToProps = {
    setUserProfile,
    toggleIsFetching,
};

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    MapStateToProps,
    MapDispatchToProps
)(withRouter(ProfileContainer));
