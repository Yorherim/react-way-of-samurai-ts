import {
    followAC,
    setUsersAC,
    unfollowtAC,
    UsersPageType,
    usersReducer,
    UsersType,
} from "./users-reducer";

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
    };
});

test("user should be followed", () => {
    const userId = state.users[0].id;

    const endState = usersReducer(state, followAC(userId));

    expect(endState.users[0].followed).toBeTruthy();
    expect(endState.users[1].followed).toBeTruthy();
});

test("user should be unfollowed", () => {
    const userId = state.users[1].id;
    const endState = usersReducer(state, unfollowtAC(userId));

    expect(endState.users[1].followed).toBeFalsy();
    expect(endState.users[0].followed).toBeFalsy();
});

test("user should be correct change follow/unfollow", () => {
    const userId = state.users[0].id;

    const endState = usersReducer(state, followAC(userId));

    expect(endState.users[0].followed).toBeTruthy();
    expect(endState.users[1].followed).toBeTruthy();

    const endState2 = usersReducer(endState, unfollowtAC(userId));

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

    const endState = usersReducer(state, setUsersAC(newUsers));

    expect(endState.users).toEqual([...state.users, ...newUsers]);
    expect(endState.users.length).toBe(4);

    const endState2 = usersReducer(endState, setUsersAC(newUsers));

    expect(endState2.users).toEqual([...endState.users, ...newUsers]);
    expect(endState2.users.length).toBe(6);
});
