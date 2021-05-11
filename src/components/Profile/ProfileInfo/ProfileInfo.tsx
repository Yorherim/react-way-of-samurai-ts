import React from "react";

import classes from "./ProfileInfo.module.scss";
import profileWrapper from "../../../assets/images/profile_wrapper.jpg";
import userPhoto from "../../../assets/images/user.png";

import { ProfileType } from "../../../redux/reducers/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType;
};

function ProfileInfo({ profile }: ProfileInfoPropsType) {
    return (
        <div className={classes.wrapper}>
            <img src={profileWrapper} alt="wrapper" />

            <div className={classes.descr}>
                <img
                    src={
                        profile.photos?.large ? profile.photos.large : userPhoto
                    }
                    alt="avatar"
                />
                <div>
                    <span>{profile.fullName}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
