import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";

type MyPostsFormDataType = {
    postText: string;
};

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    placeholder={"Something write..."}
                    name={"postText"}
                />
            </div>
            <button>Add post</button>
        </form>
    );
};

const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({ form: "newPost" })(
    MyPostsForm
);

function MyPosts({ postsData, addPost }: MyPostsPropsType) {
    const addNewPost = (formData: MyPostsFormDataType) =>
        addPost(formData.postText);

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
