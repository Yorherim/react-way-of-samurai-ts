import { ActionsTypes, ProfilePageType } from "../store";

export const profileReducer = (
    state: ProfilePageType,
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
