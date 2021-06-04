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
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

// actions creators
export const authActions = {
    setAuthUserData: (userId: number, email: string, login: string) => ({
        type: AUTH_ACTIONS_TYPE.SET_USER_DATA as const,
        data: { userId, email, login },
    }),
};

// thunks
const { setAuthUserData } = authActions;

export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
    try {
        const data = await authAPI.me();
        const { id, email, login } = data.data;
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login));
        }
    } catch (err) {
        throw new Error(err);
    }
};
