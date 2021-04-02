import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { PostType } from "../../redux/store";

type ProfilePropsType = {
    posts: Array<PostType>;
    addPost: () => void;
    updateNewPostText: (postText: string) => void;
    newPostText: string;
};

function Profile({
    posts,
    addPost,
    updateNewPostText,
    newPostText,
}: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={posts}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newPostText={newPostText}
            />
        </div>
    );
}

export default Profile;
