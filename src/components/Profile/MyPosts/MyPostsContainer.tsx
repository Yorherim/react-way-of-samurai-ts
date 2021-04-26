import React from "react";

import { ActionsTypes, PostType } from "../../../redux/store";
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    posts: Array<PostType>;
    dispatch: (action: ActionsTypes) => void;
    newPostText: string;
};

function MyPostsContainer({
    posts,
    dispatch,
    newPostText,
}: MyPostsContainerPropsType) {
    const addNewPost = () => {
        if (newPostText.trim()) {
            dispatch(addPostAC());
        }
    };

    const onPostChange = (postText: string) => {
        dispatch(updateNewPostTextAC(postText));
    };

    return (
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            addPost={addNewPost}
            updateNewPostText={onPostChange}
        />
    );
}

export default MyPostsContainer;
