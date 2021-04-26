export type MessageType = {
    id: number;
    message: string;
};
export type DialogType = {
    id: number;
    name: string;
};
type DialogsPageType = typeof initialState;

export type DialogsActionType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>;

const initialState = {
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Valera" },
    ] as DialogType[],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "What's up?" },
    ] as MessageType[],
    newMessageText: "",
};

export const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: DialogsActionType
): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    { id: 6, message: state.newMessageText },
                ],
                newMessageText: "",
            };
        case "UPDATE_NEW_MESSAGE_TEXT":
            return { ...state, newMessageText: action.messageText };
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
    messageText,
});
