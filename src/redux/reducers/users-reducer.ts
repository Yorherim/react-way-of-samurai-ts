enum USERS_ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
}

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
        case USERS_ACTIONS_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case USERS_ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case USERS_ACTIONS_TYPE.SET_USERS:
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
    type: USERS_ACTIONS_TYPE.FOLLOW as const,
    userId,
});
export const unfollowtAC = (userId: number) => ({
    type: USERS_ACTIONS_TYPE.UNFOLLOW as const,
    userId,
});
export const setUsersAC = (users: UsersType[]) => ({
    type: USERS_ACTIONS_TYPE.SET_USERS as const,
    users,
});
