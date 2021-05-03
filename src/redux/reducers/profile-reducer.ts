enum PROFILE_ACTIONS_TYPE {
    ADD_POST = "ADD_POST",
    UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
}
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};
export type ProfilePageType = typeof initialState;

type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>;

const initialState = {
    postsData: [
        { id: 1, message: "Hello", likesCount: 9 },
        { id: 2, message: "Hi", likesCount: 7 },
    ] as PostType[],
    newPostText: "",
};

export const profileReducer = (
    state: ProfilePageType = initialState,
    action: ProfileActionsType
): ProfilePageType => {
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
        default:
            return state;
    }
};

// action creators
export const addPostAC = () => ({
    type: PROFILE_ACTIONS_TYPE.ADD_POST as const,
});
export const updateNewPostTextAC = (postText: string) => ({
    type: PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT as const,
    postText,
});
