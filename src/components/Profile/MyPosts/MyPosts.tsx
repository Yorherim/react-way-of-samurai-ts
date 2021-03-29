import React, { createRef } from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

import { PostType } from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>;
};

function MyPosts({ posts }: MyPostsPropsType) {
    const newPost = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPost.current?.value) {
            alert(newPost.current.value);
            newPost.current.value = "";
        }
    };
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} />
                </div>
                <button onClick={addPost}>Add post</button>
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
