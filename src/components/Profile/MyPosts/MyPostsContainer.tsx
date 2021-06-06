import { connect } from "react-redux";

import { profileActions } from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    addPost: (postText: string) => void;
};
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { addPost } = profileActions;

const mapStateToProps = (state: AppStateType) => ({
    postsData: state.profilePage.postsData,
});

export default connect(mapStateToProps, { addPost })(MyPosts);
