import React from "react";

import classes from "./Profile.module.scss";

import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://img3.goodfon.ru/original/1920x1200/a/f0/pesok-plyazh-sledy-more-palmy.jpg"
                    alt="wrapper"
                />
            </div>
            <div>ava + descr</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
