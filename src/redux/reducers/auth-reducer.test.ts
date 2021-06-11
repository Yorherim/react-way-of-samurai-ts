import { authActions, authReducer, AuthStateType } from "./auth-reducer";

const { setAuthUserData } = authActions;

let state: AuthStateType;

beforeEach(() => {
    state = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
    };
});

test("user should be auth", () => {
    const data = {
        id: 17,
        email: "lala@yandex.ru",
        login: "Ubivator228",
    };

    const { id, email, login } = data;

    const endState = authReducer(
        state,
        setAuthUserData(id, email, login, true)
    );

    expect(endState.userId).toBe(17);
    expect(endState.email).toBe("lala@yandex.ru");
    expect(endState.login).toBe("Ubivator228");
    expect(endState.isAuth).toBeTruthy();
});
