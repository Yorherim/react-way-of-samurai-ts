import { ThunkType } from "../redux-store";
import { profileAPI, ProfileApiGetProfileType } from "../../api/api";

enum PROFILE_ACTIONS_TYPE {
    ADD_POST = "ADD_POST",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    SET_STATUS = "SET_STATUS",
}

export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ProfileActionsType = ReturnType<
    InferValueTypes<typeof profileActions>
>;
export type ProfileStateType = typeof initialState;

const initialState = {
    postsData: [
        { id: 1, message: "Hello", likesCount: 9 },
        { id: 2, message: "Hi", likesCount: 7 },
    ] as PostType[],
    profile: {} as ProfileApiGetProfileType,
    isFetching: false,
    status: "",
};

export const profileReducer = (
    state: ProfileStateType = initialState,
    action: ProfileActionsType
): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    { id: 5, message: action.postText, likesCount: 0 },
                ],
            };
        case PROFILE_ACTIONS_TYPE.SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case PROFILE_ACTIONS_TYPE.TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case PROFILE_ACTIONS_TYPE.SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
};

// action creators
export const profileActions = {
    addPost: (postText: string) => ({
        type: PROFILE_ACTIONS_TYPE.ADD_POST as const,
        postText,
    }),
    setUserProfile: (profile: ProfileApiGetProfileType) => ({
        type: PROFILE_ACTIONS_TYPE.SET_USER_PROFILE as const,
        profile,
    }),
    toggleIsFetching: (isFetching: boolean) => ({
        type: PROFILE_ACTIONS_TYPE.TOGGLE_IS_FETCHING as const,
        isFetching,
    }),
    setStatus: (status: string) => ({
        type: PROFILE_ACTIONS_TYPE.SET_STATUS as const,
        status,
    }),
};

// ----- thunks -----
const { toggleIsFetching, setUserProfile, setStatus } = profileActions;

export const getProfileTC = (userId: number): ThunkType => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        const data = await profileAPI.getProfile(userId);
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(data));
    } catch (err) {
        throw new Error(err);
    }
};

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    } catch (err) {
        throw new Error(err);
    }
};

export const updateStatusTC = (status: string): ThunkType => async (
    dispatch
) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (err) {
        throw new Error(err);
    }
};
// --------------------
