import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CombinedState } from "redux";
import { Provider } from "react-redux";

import "./index.scss";

import App from "./App";
import store, { AppStateType } from "./redux/redux-store";

export const rerenderEntireTree = (state: CombinedState<AppStateType>) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));
