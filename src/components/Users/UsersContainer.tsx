import { connect } from "react-redux";
import { Dispatch } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import {
    followAC,
    setUsersAC,
    unfollowtAC,
    UsersType,
} from "../../redux/reducers/users-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users,
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
});

const MyPostsContainer = connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default MyPostsContainer;
