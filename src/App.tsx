import React from "react";

import "./App.scss";

import { Header, Navbar, Profile, Dialogs } from "./components";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper--content">
                <Profile />
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
