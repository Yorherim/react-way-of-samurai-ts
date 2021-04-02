let rerenderEntireTree = (state: StateType) => {};

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
    addPost: () => void;
    subscribe: (observer: (state: StateType) => void) => void;
    updateNewPostText: (postText: string) => void;
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

    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubsriber(this._state);
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },

    updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubsriber(this._state);
    },
};

export default store;
