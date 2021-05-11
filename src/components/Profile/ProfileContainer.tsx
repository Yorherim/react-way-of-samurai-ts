import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Profile from "./Profile";
import { AppStateType } from "../../redux/redux-store";
import { profileActions } from "../../redux/reducers/profile-reducer";
import Preloader from "../common/Preloader/Preloader2";

type MapStateToPropsType = ReturnType<typeof MapStateToProps>;
type MapDispatchToPropsType = typeof MapDispatchToProps;
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(res.data);
            })
            .catch((err) => console.error(err));
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
)(ProfileContainer);
