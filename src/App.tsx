import React, { ComponentType } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

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
    LoginContainer,
} from "./components";
import { AppStateType } from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader2";
import { initializeAppTC } from "./redux/reducers/app-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    initializeAppTC: () => void;
};
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader />;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper--content">
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer />}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <LoginContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialize: state.app.initialized,
});

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeAppTC })
)(App);
