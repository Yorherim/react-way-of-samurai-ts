import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./App";
import state, {
    addPost,
    StateType,
    updateNewPostText,
    subscribe,
} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
