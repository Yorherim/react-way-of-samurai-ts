import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import state from "./redux/state";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
