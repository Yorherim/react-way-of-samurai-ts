import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import {
    Header,
    Navbar,
    Profile,
    News,
    Music,
    Settings,
    DialogsContainer,
} from "./components";

//types
import { ActionsTypes, DialogsPageType, ProfilePageType } from "./redux/store";

type AppPropsType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    dispatch: (action: ActionsTypes) => void;
};

function App({ profilePage, dialogsPage, dispatch }: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            posts={profilePage.postsData}
                            dispatch={dispatch}
                            newPostText={profilePage.newPostText}
                        />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <DialogsContainer
                            dialogs={dialogsPage.dialogsData}
                            messages={dialogsPage.messagesData}
                            newMessageText={dialogsPage.newMessageText}
                            dispatch={dispatch}
                        />
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
