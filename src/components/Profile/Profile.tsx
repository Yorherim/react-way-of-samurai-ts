import React from "react";

import classes from "./Profile.module.scss";

import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div className={classes.wrapper}>
                <img
                    src="https://i.pinimg.com/originals/0e/8b/a6/0e8ba6473ec93fa8b6cbba9179b31bd7.jpg"
                    alt="wrapper"
                />
            </div>
            <div>ava + descr</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
