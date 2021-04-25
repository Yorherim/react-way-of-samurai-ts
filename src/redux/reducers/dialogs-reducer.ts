import { ActionsTypes, DialogsPageType } from "../store";

export type DialogsActionType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>;

const initialState: DialogsPageType = {
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
};

export const dialogsReducer = (
    state = initialState,
    action: ActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage = {
                id: 6,
                message: state.newMessageText,
            };

            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        case "UPDATE_NEW_MESSAGE_TEXT":
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
};

// actions creators
export const addMessageAC = () => ({
    type: "ADD_MESSAGE" as const,
});
export const updateNewMessageTextAC = (messageText: string) => ({
    type: "UPDATE_NEW_MESSAGE_TEXT" as const,
    messageText: messageText,
});
