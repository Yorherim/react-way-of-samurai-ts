import { ThunkType } from "../redux-store";
import { profileAPI, ProfileApiGetProfileType } from "../../api/api";

enum PROFILE_ACTIONS_TYPE {
    ADD_POST = "ADD_POST",
    UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
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
    newPostText: "",
    profile: {} as ProfileApiGetProfileType,
    isFetching: false,
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
                    { id: 5, message: state.newPostText, likesCount: 0 },
                ],
                newPostText: "",
            };
        case PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.postText };
        case PROFILE_ACTIONS_TYPE.SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case PROFILE_ACTIONS_TYPE.TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
};

// action creators
export const profileActions = {
    addPost: () => ({
        type: PROFILE_ACTIONS_TYPE.ADD_POST as const,
    }),
    updateNewPostText: (postText: string) => ({
        type: PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT as const,
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
};

// ----- thunks -----
const { toggleIsFetching, setUserProfile } = profileActions;

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
// --------------------
