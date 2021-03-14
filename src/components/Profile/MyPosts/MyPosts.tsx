import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

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
                <Post message="Hello" likesCount={9} />
                <Post message="Hi" likesCount={7} />
            </div>
        </div>
    );
}

export default MyPosts;
