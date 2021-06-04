import axios from "axios";

// ----- users type -----
export type UsersType = {
    followed: boolean;
    id: number;
    name: string;
    photos: {
        large: string | null;
        small: string | null;
    };
    status: string | null;
    uniqueUrlName: string | null;
};
type UsersApiGetUsersType = {
    error: null;
    items: Array<UsersType>;
    totalCount: number;
};
type UsersApiFollowUnfollowType = {
    data: {};
    fieldsErrors: [];
    messages: [];
    resultCode: 0 | 1;
};
// --------------------

// ----- profile type -----
export type ProfileApiGetProfileType = {
    aboutMe: string | null;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number;
    photos: {
        small: string | null;
        large: string | null;
    };
};
// --------------------

// ----- auth type -----
type AuthApiMeType = {
    data: {
        id: number;
        login: string;
        email: string;
    };
    fieldsErrors: [];
    messages: [];
    resultCode: 0 | 1;
};
// --------------------

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "f6d122c0-e13a-41a0-8a89-732f8ec98129",
    },
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<UsersApiGetUsersType>(
                `users?page=${currentPage}&count=${pageSize}`
            )
            .then((res) => res.data);
    },
    followUser(userId: number) {
        return instance
            .post<UsersApiFollowUnfollowType>(`follow/${userId}`, {})
            .then((res) => res.data);
    },
    unfollowUser(userId: number) {
        return instance
            .delete<UsersApiFollowUnfollowType>(`follow/${userId}`)
            .then((res) => res.data);
    },
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance
            .get<ProfileApiGetProfileType>(`profile/${userId}`)
            .then((res) => res.data);
    },
};

export const authAPI = {
    me() {
        return instance.get<AuthApiMeType>(`auth/me`).then((res) => res.data);
    },
};
