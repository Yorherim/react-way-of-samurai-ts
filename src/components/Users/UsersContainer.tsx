import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import {
    getUsersTC,
    followUserTC,
    unfollowUserTC,
    usersActions,
} from "../../redux/reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader2";

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
    changeCurrentPage: usersActions.changeCurrentPage,
    getUsersTC,
    followUserTC,
    unfollowUserTC,
})(UsersAPIContainer);
