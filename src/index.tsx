import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CombinedState } from "redux";

import "./index.scss";

import App from "./App";
import store from "./redux/redux-store";
import { DialogsPageType, ProfilePageType } from "./redux/store";

export const rerenderEntireTree = (
    state: CombinedState<{ profile: ProfilePageType; dialogs: DialogsPageType }>
) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    profilePage={state.profile}
                    dialogsPage={state.dialogs}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));
