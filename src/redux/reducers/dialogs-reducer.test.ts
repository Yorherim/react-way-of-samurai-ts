import {
    dialogsActions,
    DialogsPageType,
    dialogsReducer,
    MessageType,
} from "./dialogs-reducer";

const { addMessage } = dialogsActions;

let state: DialogsPageType;

beforeEach(() => {
    state = {
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
    };
});

test("new message should be added", () => {
    const newMessage: MessageType = { id: 6, message: "ratata" };

    const endState = dialogsReducer(state, addMessage("ratata"));

    expect(endState.messagesData.length).toBe(4);
    expect(endState.messagesData[3].id).toBe(6);
    expect(endState.messagesData[3].message).toBe("ratata");
});
