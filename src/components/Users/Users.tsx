import React from "react";
import axios from "axios";

import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";

import { UsersPropsType } from "./UsersContainer";

function Users({ users, follow, unfollow, setUsers }: UsersPropsType) {
    if (users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                console.log(res);
                setUsers(res.data.items);
            });
    }

    const setUsersOnPage = () => setUsers(users);

    return (
        <>
            {<button onClick={setUsersOnPage}>set users</button>}
            {users.map((user, i) => {
                const followUser = () => follow(user.id);
                const unfollowUser = () => unfollow(user.id);

                return (
                    <div key={`${user}_${i}`} className={classes.user}>
                        <span>
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
                                    <button onClick={unfollowUser}>
                                        unfollow
                                    </button>
                                ) : (
                                    <button onClick={followUser}>follow</button>
                                )}
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </>
    );
}

export default Users;
