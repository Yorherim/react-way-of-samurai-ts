enum DIALOGS_ACTIONS_TYPE {
    ADD_MESSAGE = "ADD_MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
}
export type MessageType = {
    id: number;
    message: string;
};
export type DialogType = {
    id: number;
    name: string;
};
export type DialogsPageType = typeof initialState;
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionsTypes = ReturnType<InferValueTypes<typeof dialogsActions>>;

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
    action: ActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.ADD_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    { id: 6, message: state.newMessageText },
                ],
                newMessageText: "",
            };
        case DIALOGS_ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.messageText };
        default:
            return state;
    }
};

// actions creators
export const dialogsActions = {
    addMessageAC: () => ({
        type: DIALOGS_ACTIONS_TYPE.ADD_MESSAGE as const,
    }),
    updateNewMessageTextAC: (messageText: string) => ({
        type: DIALOGS_ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT as const,
        messageText,
    }),
};
