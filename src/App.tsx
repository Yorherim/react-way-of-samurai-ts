import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import {
    Navbar,
    News,
    Music,
    Settings,
    DialogsContainer,
    UsersContainer,
    ProfileContainer,
    HeaderContainer,
    Login,
} from "./components";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper--content">
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
