export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};
type ProfilePageType = typeof initialState;

export type ProfileActionsType =
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
        case "ADD_POST":
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    { id: 5, message: state.newPostText, likesCount: 0 },
                ],
                newPostText: "",
            };
        case "UPDATE_NEW_POST_TEXT":
            return { ...state, newPostText: action.postText };
        default:
            return state;
    }
};

// action creators
export const addPostAC = () => ({
    type: "ADD_POST" as const,
});
export const updateNewPostTextAC = (postText: string) => ({
    type: "UPDATE_NEW_POST_TEXT" as const,
    postText,
});
