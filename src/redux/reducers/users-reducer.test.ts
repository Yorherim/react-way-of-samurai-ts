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
                id: 1,
                photoUrl:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                followed: false,
                fullName: "Igor",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                photoUrl:
                    "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
                followed: true,
                fullName: "Dima",
                status: "I am good",
                location: { city: "Moscow", country: "Russia" },
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
            id: 3,
            photoUrl:
                "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
            followed: false,
            fullName: "Sanya",
            status: "I am a boss",
            location: { city: "Minsk", country: "Belarus" },
        },
        {
            id: 4,
            photoUrl:
                "https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png",
            followed: true,
            fullName: "Boba",
            status: "I am good",
            location: { city: "Moscow", country: "Russia" },
        },
    ];

    const endState = usersReducer(state, setUsersAC(newUsers));

    expect(endState.users).toEqual([...state.users, ...newUsers]);
    expect(endState.users.length).toBe(4);

    const endState2 = usersReducer(endState, setUsersAC(newUsers));

    expect(endState2.users).toEqual([...endState.users, ...newUsers]);
    expect(endState2.users.length).toBe(6);
});
