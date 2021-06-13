import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import {
    getUsersTC,
    followUserTC,
    unfollowUserTC,
    usersActions,
} from "../../redux/reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader2";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/selectors/user-selectors";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    changeCurrentPage: (page: number) => void;
    getUsersTC: (currentPage: number, pageSize: number) => void;
    followUserTC: (userId: number) => void;
    unfollowUserTC: (userId: number) => void;
};
type UsersAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {
    componentDidMount() {
        const { currentPage, pageSize, getUsersTC } = this.props;
        getUsersTC(currentPage, pageSize);
    }

    onChangePage = (page: number) => {
        const { pageSize, changeCurrentPage, getUsersTC } = this.props;
        changeCurrentPage(page);
        getUsersTC(page, pageSize);
    };

    followUser = (userId: number) => this.props.followUserTC(userId);
    unfollowUser = (userId: number) => this.props.unfollowUserTC(userId);

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching,
            followingInProgress,
        } = this.props;

        return (
            <>
                {isFetching ? <Preloader /> : ""}
                <Users
                    pageSize={pageSize}
                    currentPage={currentPage}
                    users={users}
                    onChangePage={this.onChangePage}
                    totalUsersCount={totalUsersCount}
                    followUser={this.followUser}
                    unfollowUser={this.unfollowUser}
                    followingInProgress={followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

export default compose<ComponentType>(
    connect(mapStateToProps, {
        changeCurrentPage: usersActions.changeCurrentPage,
        getUsersTC,
        followUserTC,
        unfollowUserTC,
    })
)(UsersAPIContainer);
