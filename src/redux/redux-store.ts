import { createStore, combineReducers, compose } from "redux";

import { profileReducer as profile } from "./reducers/profile-reducer";
import { dialogsReducer as dialogs } from "./reducers/dialogs-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profile,
    dialogs,
});

const store = createStore(reducers, composeEnhancers());

export default store;
