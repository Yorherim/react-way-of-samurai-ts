import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { PostType } from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>;
    addPost: (postMessage: string) => void;
};

function Profile({ posts, addPost }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    );
}

export default Profile;
