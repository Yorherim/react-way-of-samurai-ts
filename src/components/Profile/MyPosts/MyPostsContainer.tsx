import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    postsData: state.profile.postsData,
    newPostText: state.profile.newPostText,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPost: () => {
        dispatch(addPostAC());
    },
    updateNewPostText: (postText: string) => {
        dispatch(updateNewPostTextAC(postText));
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
)(MyPosts);

export default MyPostsContainer;
