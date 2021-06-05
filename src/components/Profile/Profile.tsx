import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileApiGetProfileType } from "../../api/api";

type ProfilePropsType = {
    profile: ProfileApiGetProfileType;
    status: string;
    updateStatus: (status: string) => void;
};

function Profile({ profile, status, updateStatus }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
