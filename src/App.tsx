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
import { DialogsPageType, ProfilePageType } from "./redux/state";

type AppPropsType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

function App({ profilePage, dialogsPage }: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route
                    path="/profile"
                    render={() => <Profile posts={profilePage.postsData} />}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs
                            dialogs={dialogsPage.dialogsData}
                            messages={dialogsPage.messagesData}
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
