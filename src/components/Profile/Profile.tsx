import React from "react";

import { ActionsTypes, PostType } from "../../redux/store";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    posts: Array<PostType>;
    dispatch: (action: ActionsTypes) => void;
    newPostText: string;
};

function Profile({ posts, dispatch, newPostText }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                posts={posts}
                dispatch={dispatch}
                newPostText={newPostText}
            />
        </div>
    );
}

export default Profile;
