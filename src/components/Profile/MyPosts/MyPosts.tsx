import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

import { PostsType } from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostsType>;
};

function MyPosts({ posts }: MyPostsPropsType) {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea />
                </div>
                <button>Add post</button>
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
