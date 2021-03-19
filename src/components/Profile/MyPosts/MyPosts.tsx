import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

type PostsType = {
    id: number;
    message: string;
    likesCount: number;
};

const postsData: Array<PostsType> = [
    { id: 1, message: "Hello", likesCount: 9 },
    { id: 2, message: "Hi", likesCount: 7 },
];

function MyPosts() {
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
                {postsData.map((p) => (
                    <Post message={p.message} likesCount={p.likesCount} />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;
