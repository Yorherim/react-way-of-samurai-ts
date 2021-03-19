import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import {
    Header,
    Navbar,
    Profile,
    Dialogs,
    News,
    Music,
    Settings,
} from "./components";

//types
import { MessagesType, DialogsType, PostsType } from "./index";

type AppPropsType = {
    messages: Array<MessagesType>;
    dialogs: Array<DialogsType>;
    posts: Array<PostsType>;
};

function App({ messages, dialogs, posts }: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route
                    path="/profile"
                    render={() => <Profile posts={posts} />}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs dialogs={dialogs} messages={messages} />
                    )}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
