import { ThunkType } from "../redux-store";
import { authAPI } from "../../api/api";

enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

export type AuthStateType = {
    userId: null | number;
    email: null | string;
    login: null | string;
    isAuth: boolean;
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type AuthActionsTypes = ReturnType<InferValueTypes<typeof authActions>>;

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (
    state: AuthStateType = initialState,
    action: AuthActionsTypes
): AuthStateType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

// actions creators
export const authActions = {
    setAuthUserData: (
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    ) => ({
        type: AUTH_ACTIONS_TYPE.SET_USER_DATA as const,
        payload: { userId, email, login, isAuth },
    }),
};

// thunks
const { setAuthUserData } = authActions;

export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
    try {
        const data = await authAPI.me();
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch (err) {
        throw new Error(err);
    }
};
export const loginTC = (
    email: string,
    password: string,
    rememberMe: boolean | undefined
): ThunkType => async (dispatch) => {
    try {
        const data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getAuthUserDataTC());
        }
    } catch (err) {
        throw new Error(err);
    }
};
export const logoutTC = (): ThunkType => async (dispatch) => {
    try {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (err) {
        throw new Error(err);
    }
};
