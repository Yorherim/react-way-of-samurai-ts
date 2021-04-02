let rerenderEntireTree = (state: StateType) => {};

type AddPostActionType = {
    type: "ADD_POST";
};
type UpdateNewPostChangeActionType = {
    type: "UPDATE_NEW_POST_TEXT";
    postText: string;
};
export type ActionsTypes = AddPostActionType | UpdateNewPostChangeActionType;
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
        },
    },

    getState() {
        return this._state;
    },

    _callSubsriber() {
        console.log("state changed");
    },

    dispatch(action) {
        if (action.type === "ADD_POST") {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubsriber(this._state);
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.postText;
            this._callSubsriber(this._state);
        }
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },
};

export default store;
