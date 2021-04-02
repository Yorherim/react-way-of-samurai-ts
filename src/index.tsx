import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./App";
import store, { StateType } from "./redux/store";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    profilePage={store._state.profilePage}
                    dialogsPage={store._state.dialogsPage}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
