import React, { ChangeEvent } from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

import { PostType } from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>;
    addPost: () => void;
    updateNewPostText: (postText: string) => void;
    newPostText: string;
};

function MyPosts({
    posts,
    addPost,
    newPostText,
    updateNewPostText,
}: MyPostsPropsType) {
    const addNewPost = () => {
        if (newPostText) {
            addPost();
            updateNewPostText("");
        }
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
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
