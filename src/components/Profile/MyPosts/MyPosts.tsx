import React, { createRef } from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

import { PostType } from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>;
    addPost: (postMessage: string) => void;
};

function MyPosts({ posts, addPost }: MyPostsPropsType) {
    const newPost = createRef<HTMLTextAreaElement>();

    const addNewPost = () => {
        if (newPost.current?.value) {
            addPost(newPost.current.value);
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
