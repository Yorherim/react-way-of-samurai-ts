import React from "react";

import classes from "./ProfileInfo.module.scss";
import profileWrapper from "../../../assets/images/profile_wrapper.jpg";
import userPhoto from "../../../assets/images/user.png";
import { ProfileApiGetProfileType } from "../../../api/api";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileApiGetProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isAuth: boolean;
};

function ProfileInfo({
    profile,
    status,
    updateStatus,
    isAuth,
}: ProfileInfoPropsType) {
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
                <ProfileStatus
                    status={status}
                    updateStatus={updateStatus}
                    isAuth={isAuth}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;
