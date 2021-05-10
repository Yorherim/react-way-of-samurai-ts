import { connect } from "react-redux";

import { profileActions } from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { addPost, updateNewPostText } = profileActions;

const mapStateToProps = (state: AppStateType) => ({
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = {
    addPost,
    updateNewPostText,
};

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);
