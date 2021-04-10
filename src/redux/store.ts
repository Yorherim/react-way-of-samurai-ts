const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

type AddPostActionType = ReturnType<typeof addPostAC>;
type AddMessageActionType = ReturnType<typeof addMessageAC>;
type UpdateNewPostChangeActionType = ReturnType<typeof updateNewPostTextAC>;
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>;
export type ActionsTypes =
    | AddPostActionType
    | UpdateNewPostChangeActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType;
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
    newMessageText: string;
};
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};
export type StoreType = {
    _state: StateType;
    getState: () => StateType;
    _callSubsriber: (state: StateType) => void;
    dispatch: (action: ActionsTypes) => void;
    subscribe: (observer: (state: StateType) => void) => void;
};

const store: StoreType = {
    _state: {
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
            newMessageText: "",
        },
    },

    getState() {
        return this._state;
    },

    _callSubsriber() {
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubsriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.postText;
            this._callSubsriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            const newMessage: MessageType = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubsriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubsriber(this._state);
        }
    },
};

// action creators
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (postText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText,
    } as const;
};

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText,
    } as const;
};

export default store;
