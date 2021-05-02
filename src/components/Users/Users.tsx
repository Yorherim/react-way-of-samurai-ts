import React from "react";

import classes from "./Users.module.scss";

import { UsersPropsType } from "./UsersContainer";
import { UsersType } from "../../redux/reducers/users-reducer";

function Users({ users, follow, unfollow, setUsers }: UsersPropsType) {
    debugger;
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                followed: true,
                fullName: "Dima",
                status: "What's up?",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                photoUrl:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                followed: false,
                fullName: "Igor",
                status: "ratata",
                location: { city: "Chicago", country: "USA" },
            },
        ]);
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
                                <img src={user.photoUrl} alt="avatar" />
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
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </>
    );
}

export default Users;
