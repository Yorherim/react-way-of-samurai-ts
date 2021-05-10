import {
    usersActions,
    UsersPageType,
    usersReducer,
    UsersType,
} from "./users-reducer";

const {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetching,
} = usersActions;

let state: UsersPageType;

beforeEach(() => {
    state = {
        users: [
            {
                followed: false,
                id: 1,
                name: "Igor",
                photos: {
                    large:
                        "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                    small: null,
                },
                status: "I am a boss",
                uniqueUrlName: null,
            },
            {
                followed: true,
                id: 2,
                name: "Igor",
                photos: {
                    large:
                        "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                    small: null,
                },
                status: "I am a boss",
                uniqueUrlName: null,
            },
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
    };
});

test("user should be followed", () => {
    const userId = state.users[0].id;

    const endState = usersReducer(state, follow(userId));

    expect(endState.users[0].followed).toBeTruthy();
    expect(endState.users[1].followed).toBeTruthy();
});

test("user should be unfollowed", () => {
    const userId = state.users[1].id;
    const endState = usersReducer(state, unfollow(userId));

    expect(endState.users[1].followed).toBeFalsy();
    expect(endState.users[0].followed).toBeFalsy();
});

test("user should be correct change follow/unfollow", () => {
    const userId = state.users[0].id;

    const endState = usersReducer(state, follow(userId));

    expect(endState.users[0].followed).toBeTruthy();
    expect(endState.users[1].followed).toBeTruthy();

    const endState2 = usersReducer(endState, unfollow(userId));

    expect(endState2.users[0].followed).toBeFalsy();
    expect(endState2.users[1].followed).toBeTruthy();
});

test("users should be added in state", () => {
    const newUsers: UsersType[] = [
        {
            followed: false,
            id: 3,
            name: "Igor",
            photos: {
                large:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                small: null,
            },
            status: "I am a boss",
            uniqueUrlName: null,
        },
        {
            followed: true,
            id: 4,
            name: "Igor",
            photos: {
                large:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                small: null,
            },
            status: "I am a boss",
            uniqueUrlName: null,
        },
    ];

    const endState = usersReducer(state, setUsers(newUsers));

    expect(endState.users).toEqual([...newUsers]);
    expect(endState.users.length).toBe(2);
});

test("current page should be changed", () => {
    const endState = usersReducer(state, changeCurrentPage(2));

    expect(endState.currentPage).toBe(2);
});

test("total users count should be added", () => {
    const endState = usersReducer(state, setTotalUsersCount(50));

    expect(endState.totalUsersCount).toBe(50);
});

test("isFetching should be toggle", () => {
    const endState = usersReducer(state, toggleIsFetching(true));
    expect(endState.isFetching).toBeTruthy();

    const endState2 = usersReducer(endState, toggleIsFetching(false));
    expect(endState2.isFetching).toBeFalsy();
});
