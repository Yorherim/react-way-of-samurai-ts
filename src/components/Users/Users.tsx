import React from "react";
import axios from "axios";

import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";

import { UsersPropsType } from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
            .catch((err) => console.error(err));
    }

    onChangePage = (page: number) => {
        this.props.changeCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((res) => this.props.setUsers(res.data.items))
            .catch((err) => console.error(err));
    };

    render() {
        const {
            users,
            follow,
            unfollow,
            totalUsersCount,
            pageSize,
            currentPage,
        } = this.props;

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
                            onClick={() => this.onChangePage(p)}
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
                                    <button onClick={unfollowUser}>
                                        unfollow
                                    </button>
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
}

export default Users;
