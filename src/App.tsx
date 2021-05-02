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
    Users,
} from "./components";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
