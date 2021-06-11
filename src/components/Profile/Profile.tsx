import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileApiGetProfileType } from "../../api/api";

type ProfilePropsType = {
    profile: ProfileApiGetProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isAuth: boolean;
};

function Profile({ profile, status, updateStatus, isAuth }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isAuth={isAuth}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
