enum USERS_ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS",
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
    isFetching: false,
    followingInProgress: [] as number[],
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
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => {
                          return id !== action.userId;
                      }),
            };
        default:
            return state;
    }
};

// ----- action creators -----
export const usersActions = {
    follow: (userId: number) => ({
        type: USERS_ACTIONS_TYPE.FOLLOW as const,
        userId,
    }),
    unfollow: (userId: number) => ({
        type: USERS_ACTIONS_TYPE.UNFOLLOW as const,
        userId,
    }),
    setUsers: (users: UsersType[]) => ({
        type: USERS_ACTIONS_TYPE.SET_USERS as const,
        users,
    }),
    changeCurrentPage: (page: number) => ({
        type: USERS_ACTIONS_TYPE.CHANGE_CURRENT_PAGE as const,
        page,
    }),
    setTotalUsersCount: (totalCount: number) => ({
        type: USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT as const,
        totalCount,
    }),
    toggleIsFetching: (isFetching: boolean) => ({
        type: USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING as const,
        isFetching,
    }),
    toggleIsFollowingProgress: (userId: number, isFollowing: boolean) => ({
        type: USERS_ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS as const,
        userId,
        isFollowing,
    }),
};
// --------------------
