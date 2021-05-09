import { connect } from "react-redux";
import { Dispatch } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import {
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowtAC,
    UsersType,
} from "../../redux/reducers/users-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: number) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
        dispatch(unfollowtAC(userId));
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
});

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(Users);
