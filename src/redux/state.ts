import { rerenderEntireTree } from "../render";

export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};
export type DialogType = {
    id: number;
    name: string;
};
export type MessageType = {
    id: number;
    message: string;
};
export type ProfilePageType = {
    postsData: Array<PostType>;
    newPostText: string;
};
export type DialogsPageType = {
    dialogsData: Array<DialogType>;
    messagesData: Array<MessageType>;
};
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

const state: StateType = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hello", likesCount: 9 },
            { id: 2, message: "Hi", likesCount: 7 },
        ],
        newPostText: "",
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Oleg" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Valera" },
        ],
        messagesData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello" },
            { id: 3, message: "What's up?" },
        ],
    },
};

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
};

export const updateNewPostText = (postText: string) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
};

export default state;
