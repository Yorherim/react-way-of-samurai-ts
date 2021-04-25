import { ActionsTypes, ProfilePageType } from "../store";

export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>;

const initialState: ProfilePageType = {
    postsData: [
        { id: 1, message: "Hello", likesCount: 9 },
        { id: 2, message: "Hi", likesCount: 7 },
    ],
    newPostText: "",
};

export const profileReducer = (
    state = initialState,
    action: ActionsTypes
): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            state.postsData.push(newPost);
            state.newPostText = "";

            return state;

        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.postText;
            return state;

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
    postText: postText,
});
