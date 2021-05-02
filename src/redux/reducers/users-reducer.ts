type UserType = {
    id: number;
    followed: boolean;
    fullName: string;
    status: string;
    location: {
        city: string;
        country: string;
    };
};
export type UsersPageType = typeof initialState;
type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowtAC>;

const initialState = {
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
    ] as UserType[],
};

export const usersReducer = (
    state: UsersPageType = initialState,
    action: ActionsType
): UsersPageType => {
    switch (action.type) {
        default:
            return state;
    }
};

// action creators
export const followAC = (userId: number) => ({
    type: "FOLLOW" as const,
    userId,
});
export const unfollowtAC = (userId: number) => ({
    type: "UNFOLLOW" as const,
    userId,
});
