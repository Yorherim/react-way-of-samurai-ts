import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/reducers/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType;
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
