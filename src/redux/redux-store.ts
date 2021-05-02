import { createStore, combineReducers, compose } from "redux";

import { profileReducer as profilePage } from "./reducers/profile-reducer";
import { dialogsReducer as dialogsPage } from "./reducers/dialogs-reducer";
import { usersReducer as usersPage } from "./reducers/users-reducer";

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
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers());

export default store;
