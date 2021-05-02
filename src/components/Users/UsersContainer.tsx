import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Users } from "../index";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

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
