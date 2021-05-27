import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "f6d122c0-e13a-41a0-8a89-732f8ec98129",
    },
});

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data);
    },
    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`, {}).then((res) => res.data);
    },
    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`).then((res) => res.data);
    },
};
