enum DIALOGS_ACTIONS_TYPE {
    ADD_MESSAGE = "ADD_MESSAGE",
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
export type DialogsActionsTypes = ReturnType<
    InferValueTypes<typeof dialogsActions>
>;

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
};

export const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: DialogsActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.ADD_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    { id: 6, message: action.newMessage },
                ],
            };
        default:
            return state;
    }
};

// actions creators
export const dialogsActions = {
    addMessage: (newMessage: string) => ({
        type: DIALOGS_ACTIONS_TYPE.ADD_MESSAGE as const,
        newMessage,
    }),
};
