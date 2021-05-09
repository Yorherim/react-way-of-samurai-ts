import React from "react";

import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";

import { UsersType } from "../../redux/reducers/users-reducer";

type UsersPropsType = {
    pageSize: number;
    currentPage: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    users: UsersType[];
    onChangePage: (p: number) => void;
    totalUsersCount: number;
};

function Users({
    pageSize,
    currentPage,
    follow,
    unfollow,
    users,
    onChangePage,
    totalUsersCount,
}: UsersPropsType) {
    // ----- for pagination -----
    const pagesCount = Math.ceil(50 / pageSize); // set 50 cause so many users (too much pagination)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // --------------------

    return (
        <>
            <div className={classes.pages}>
                {pages.map((p, i) => (
                    <span
                        key={`${p}_${i}`}
                        className={
                            currentPage === p ? classes.selectedPage : ""
                        }
                        onClick={() => onChangePage(p)}
                    >
                        {p}
                    </span>
                ))}
            </div>

            {users.map((user, i) => {
                const followUser = () => follow(user.id);
                const unfollowUser = () => unfollow(user.id);

                return (
                    <div key={`${user.id}_${i}`} className={classes.user}>
                        <div>
                            <img
                                src={
                                    user.photos.small
                                        ? user.photos.small
                                        : userPhoto
                                }
                                alt="avatar"
                            />
                        </div>
                        <div>
                            {user.followed ? (
                                <button onClick={unfollowUser}>unfollow</button>
                            ) : (
                                <button onClick={followUser}>follow</button>
                            )}
                        </div>

                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                );
            })}
        </>
    );
}

export default Users;
