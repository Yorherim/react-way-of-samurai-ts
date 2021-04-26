import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    addPostAC,
    ProfilePageType,
    updateNewPostTextAC,
} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";

type MapStateToPropsType = {
    profile: ProfilePageType;
};
type MapDispatchToPropsType = {
    addPost: () => void;
    updateNewPostText: (postText: string) => void;
};
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profile,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    addPost: () => {
        dispatch(addPostAC());
    },
    updateNewPostText: (postText: string) => {
        dispatch(updateNewPostTextAC(postText));
    },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
