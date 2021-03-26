import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { PostType } from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>;
};

function Profile({ posts }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
}

export default Profile;
