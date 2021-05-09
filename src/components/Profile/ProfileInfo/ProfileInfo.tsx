import React from "react";

import classes from "./ProfileInfo.module.scss";
import profileWrapper from "../../../assets/images/profile_wrapper.jpg";

function ProfileInfo() {
    return (
        <div className={classes.wrapper}>
            <img src={profileWrapper} alt="wrapper" />

            <div className={classes.descr}>ava + descr</div>
        </div>
    );
}

export default ProfileInfo;
