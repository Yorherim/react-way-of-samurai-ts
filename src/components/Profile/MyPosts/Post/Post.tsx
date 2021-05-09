import React from "react";

import classes from "./Post.module.scss";
import avatarUser from "../../../../assets/images/profile_post_avatar_user.jpg";

type PostPropsType = {
    message: string;
    likesCount: number;
};

function Post({ message, likesCount }: PostPropsType) {
    return (
        <div className={classes.item}>
            <img src={avatarUser} alt={"ava"} />
            {message}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
