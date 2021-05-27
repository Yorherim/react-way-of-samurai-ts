import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { usersActions } from "../../redux/reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader2";
import { usersAPI } from "../../api/api";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
type UsersAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI
                .getUsers(this.props.currentPage, this.props.pageSize)
                .then((data) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })
                .catch((err) => console.error(err));
        }
    }

    onChangePage = (page: number) => {
        this.props.changeCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI
            .getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
            .catch((err) => console.error(err));
    };

    followUser = (userId: number) => {
        this.props.toggleIsFetching(true);
        usersAPI
            .followUser(userId)
            .then((data) => {
                this.props.toggleIsFetching(false);
                if (data.resultCode === 0) {
                    this.props.follow(userId);
                }
            })
            .catch((err) => console.error(err));
    };

    unfollowUser = (userId: number) => {
        this.props.toggleIsFetching(true);
        usersAPI
            .unfollowUser(userId)
            .then((data) => {
                this.props.toggleIsFetching(false);
                if (data.resultCode === 0) {
                    this.props.unfollow(userId);
                }
            })
            .catch((err) => console.error(err));
    };

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching,
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
                />
            </>
        );
    }
}

const {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetching,
} = usersActions;

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
};

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPIContainer);
