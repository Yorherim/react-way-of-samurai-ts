import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import {
    MyPostsFormDataType,
    MyPostsReduxForm,
} from "./MyPostsForm/MyPostsForm";

function MyPosts({ postsData, addPost }: MyPostsPropsType) {
    const addNewPost = (formData: MyPostsFormDataType) => {
        addPost(formData.postText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={addNewPost} />

            <div className={classes.posts}>
                {postsData.map((p, i) => (
                    <Post
                        key={`${p}_${i}`}
                        message={p.message}
                        likesCount={p.likesCount}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;
