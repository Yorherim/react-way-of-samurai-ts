enum USERS_ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
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
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionsTypes = ReturnType<InferValueTypes<typeof usersActions>>;

const initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

export const usersReducer = (
    state: UsersPageType = initialState,
    action: ActionsTypes
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
                users: [...action.users],
            };
        case USERS_ACTIONS_TYPE.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        default:
            return state;
    }
};

// ----- action creators -----
export const usersActions = {
    followAC: (userId: number) => ({
        type: USERS_ACTIONS_TYPE.FOLLOW as const,
        userId,
    }),
    unfollowAC: (userId: number) => ({
        type: USERS_ACTIONS_TYPE.UNFOLLOW as const,
        userId,
    }),
    setUsersAC: (users: UsersType[]) => ({
        type: USERS_ACTIONS_TYPE.SET_USERS as const,
        users,
    }),
    changeCurrentPageAC: (page: number) => ({
        type: USERS_ACTIONS_TYPE.CHANGE_CURRENT_PAGE as const,
        page,
    }),
    setTotalUsersCountAC: (totalCount: number) => ({
        type: USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT as const,
        totalCount,
    }),
};
// --------------------
