import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            my posts
            <div>
                <textarea placeholder={"Some writing..."}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hello" likesCount={23} />
                <Post message="Hi" likesCount={17} />
            </div>
        </div>
    );
}

export default MyPosts;
