import { DialogsActionType, dialogsReducer } from "./reducers/dialogs-reducer";
// import { ProfileActionsType, profileReducer } from "./reducers/profile-reducer";
//
// export type ActionsTypes = ProfileActionsType | DialogsActionType;
//
// type PostType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };
// type DialogType = {
//     id: number;
//     name: string;
// };
// type MessageType = {
//     id: number;
//     message: string;
// };
// type ProfilePageType = {
//     postsData: Array<PostType>;
//     newPostText: string;
// };
// type DialogsPageType = {
//     dialogsData: Array<DialogType>;
//     messagesData: Array<MessageType>;
//     newMessageText: string;
// };
// type StateType = {
//     profilePage: ProfilePageType;
//     dialogsPage: DialogsPageType;
// };
// type StoreType = {
//     _state: StateType;
//     getState: () => StateType;
//     _callSubsriber: (state: StateType) => void;
//     dispatch: (action: ActionsTypes) => void;
//     subscribe: (observer: (state: StateType) => void) => void;
// };
//
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 { id: 1, message: "Hello", likesCount: 9 },
//                 { id: 2, message: "Hi", likesCount: 7 },
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogsData: [
//                 { id: 1, name: "Dima" },
//                 { id: 2, name: "Oleg" },
//                 { id: 3, name: "Sveta" },
//                 { id: 4, name: "Valera" },
//             ],
//             messagesData: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "Hello" },
//                 { id: 3, message: "What's up?" },
//             ],
//             newMessageText: "",
//         },
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     _callSubsriber() {
//         console.log("state changed");
//     },
//
//     subscribe(observer) {
//         this._callSubsriber = observer;
//     },
//
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action);
//         dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubsriber(this._state);
//     },
// };
//
// export default store;
