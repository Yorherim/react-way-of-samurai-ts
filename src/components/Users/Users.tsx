import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";

import { UsersType } from "../../redux/reducers/users-reducer";

type UsersPropsType = {
    pageSize: number;
    currentPage: number;
    users: UsersType[];
    onChangePage: (p: number) => void;
    totalUsersCount: number;
    followUser: (userId: number) => void;
    unfollowUser: (userId: number) => void;
    followingInProgress: number[];
};

function Users({
    pageSize,
    currentPage,
    users,
    onChangePage,
    totalUsersCount,
    followUser,
    unfollowUser,
    followingInProgress,
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
                return (
                    <div key={`${user.id}_${i}`} className={classes.user}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    src={
                                        user.photos.small
                                            ? user.photos.small
                                            : userPhoto
                                    }
                                    alt="avatar"
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    disabled={followingInProgress.includes(
                                        user.id
                                    )}
                                    onClick={() => unfollowUser(user.id)}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={followingInProgress.includes(
                                        user.id
                                    )}
                                    onClick={() => followUser(user.id)}
                                >
                                    follow
                                </button>
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
