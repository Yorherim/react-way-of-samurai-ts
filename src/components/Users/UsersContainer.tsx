import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { usersActions, UsersType } from "../../redux/reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader2";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type UsersAPIContainerPropsType = MapStateToPropsType &
    MapDispatchToPropsType;

class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page
                =${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
            .catch((err) => console.error(err));
    }

    onChangePage = (page: number) => {
        this.props.changeCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page
                =${page}&count=${this.props.pageSize}`
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
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    toggleIsFetchingAC,
} = usersActions;

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: number) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (users: UsersType[]) => {
        dispatch(setUsersAC(users));
    },
    changeCurrentPage: (page: number) => {
        dispatch(changeCurrentPageAC(page));
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching: boolean) => {
        dispatch(toggleIsFetchingAC(isFetching));
    },
});

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPIContainer);
