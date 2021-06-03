import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import {
    ProfileActionsType,
    profileReducer as profilePage,
} from "./reducers/profile-reducer";
import {
    DialogsActionsTypes,
    dialogsReducer as dialogsPage,
} from "./reducers/dialogs-reducer";
import {
    UsersActionsTypes,
    usersReducer as usersPage,
} from "./reducers/users-reducer";
import { AuthActionsTypes, authReducer as auth } from "./reducers/auth-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profilePage,
    dialogsPage,
    usersPage,
    auth,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionsType =
    | UsersActionsTypes
    | DialogsActionsTypes
    | ProfileActionsType
    | AuthActionsTypes;
export type ThunkType = ThunkAction<
    void,
    AppStateType,
    unknown,
    AppActionsType
>;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
