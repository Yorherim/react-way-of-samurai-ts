import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { ActionsTypes, PostType } from "../../redux/store";

type ProfilePropsType = {
    posts: Array<PostType>;
    dispatch: (action: ActionsTypes) => void;
    newPostText: string;
};

function Profile({ posts, dispatch, newPostText }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={posts}
                dispatch={dispatch}
                newPostText={newPostText}
            />
        </div>
    );
}

export default Profile;
