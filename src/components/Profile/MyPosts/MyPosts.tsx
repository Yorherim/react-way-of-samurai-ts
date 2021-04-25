import React, { ChangeEvent } from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

import { ActionsTypes, PostType } from "../../../redux/store";
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/reducers/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostType>;
    dispatch: (action: ActionsTypes) => void;
    newPostText: string;
};

function MyPosts({ posts, dispatch, newPostText }: MyPostsPropsType) {
    const addNewPost = () => {
        if (newPostText.trim()) {
            dispatch(addPostAC());
        }
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value));
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={newPostText} />
                </div>
                <button onClick={addNewPost}>Add post</button>
            </div>

            <div className={classes.posts}>
                {posts.map((p) => (
                    <Post
                        key={p.id}
                        message={p.message}
                        likesCount={p.likesCount}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;
