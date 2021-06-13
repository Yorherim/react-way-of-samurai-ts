import { ThunkType } from "../redux-store";

import { getAuthUserDataTC } from "./auth-reducer";

enum APP_ACTIONS_TYPE {
    INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS",
}

type AppStateType = {
    initialized: boolean;
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type AppReducerActionsTypes = ReturnType<
    InferValueTypes<typeof appActions>
>;

const initialState: AppStateType = {
    initialized: false,
};

export const appReducer = (
    state: AppStateType = initialState,
    action: AppReducerActionsTypes
) => {
    switch (action.type) {
        case APP_ACTIONS_TYPE.INITIALIZED_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
};

const appActions = {
    initializedSuccess: () => ({
        type: APP_ACTIONS_TYPE.INITIALIZED_SUCCESS as const,
    }),
};

const { initializedSuccess } = appActions;

export const initializeAppTC = (): ThunkType => async (dispatch) => {
    try {
        await dispatch(getAuthUserDataTC());
        dispatch(initializedSuccess());
    } catch (err) {
        throw new Error(err);
    }
};
