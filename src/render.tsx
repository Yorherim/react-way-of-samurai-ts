import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { addPost, StateType, updateNewPostText } from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    console.log(state);
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
