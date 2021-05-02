import { followAC, UsersPageType, usersReducer } from "./users-reducer";

let state: UsersPageType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 1,
                followed: true,
                fullName: "Hello",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 1,
                followed: false,
                fullName: "Hello",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
        ],
    };
});

test("user should be followed", () => {
    const userId = state.users[0].id;
    const endState = usersReducer(state, followAC(userId));

    expect(endState.users[0].followed).toBeTruthy();
});
