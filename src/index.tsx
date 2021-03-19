import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";

export type PostsType = {
    id: number;
    message: string;
    likesCount: number;
};

export type DialogsType = {
    id: number;
    name: string;
};

export type MessagesType = {
    id: number;
    message: string;
};

const postsData: Array<PostsType> = [
    { id: 1, message: "Hello", likesCount: 9 },
    { id: 2, message: "Hi", likesCount: 7 },
];

const dialogsData: Array<DialogsType> = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
];

const messagesData: Array<MessagesType> = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What's up?" },
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                dialogs={dialogsData}
                messages={messagesData}
                posts={postsData}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
