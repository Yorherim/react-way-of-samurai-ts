import { ActionsTypes, DialogsPageType } from "../store";

export const dialogsReducer = (
    state: DialogsPageType,
    action: ActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messagesData: [
                    {
                        id: 6,
                        message: state.newMessageText,
                    },
                ],
                newMessageText: "",
            };
        case "UPDATE_NEW_MESSAGE_TEXT":
            return {
                ...state,
                newMessageText: action.messageText,
            };
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
