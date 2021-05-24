import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { usersActions } from "../../redux/reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader2";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
type UsersAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
                )
                .then((res) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                })
                .catch((err) => console.error(err));
        }
    }

    onChangePage = (page: number) => {
        this.props.changeCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
            })
            .catch((err) => console.error(err));
    };

    render() {
        const {
            users,
            follow,
            unfollow,
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
                    follow={follow}
                    unfollow={unfollow}
                    users={users}
                    onChangePage={this.onChangePage}
                    totalUsersCount={totalUsersCount}
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
