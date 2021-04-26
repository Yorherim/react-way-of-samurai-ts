import React, { ChangeEvent } from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";

function MyPosts({
    profile: { postsData, newPostText },
    addPost,
    updateNewPostText,
}: MyPostsPropsType) {
    const addNewPost = () => {
        if (newPostText.trim()) {
            addPost();
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
                {postsData.map((p) => (
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
