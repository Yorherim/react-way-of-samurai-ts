export type UsersType = {
    followed: boolean;
    id: number;
    name: string;
    photos: {
        large: string | null;
        small: string | null;
    };
    status: string | null;
    uniqueUrlName: string | null;
};
export type UsersPageType = typeof initialState;
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowtAC>
    | ReturnType<typeof setUsersAC>;

const initialState = {
    users: [] as UsersType[],
};

export const usersReducer = (
    state: UsersPageType = initialState,
    action: ActionsType
): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
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
export const setUsersAC = (users: UsersType[]) => ({
    type: "SET_USERS" as const,
    users,
});
