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

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Route path="/profile" component={Profile} />
                <Route path="/dialogs" component={Dialogs} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
