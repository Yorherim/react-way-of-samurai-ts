import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import {
    Header,
    Navbar,
    News,
    Music,
    Settings,
    DialogsContainer,
    UsersContainer,
    ProfileContainer,
} from "./components";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
