import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileApiGetProfileType } from "../../api/api";

type ProfilePropsType = {
    profile: ProfileApiGetProfileType;
};

function Profile({ profile }: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
