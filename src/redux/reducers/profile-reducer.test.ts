import { ProfileApiGetProfileType } from "../../api/api";
import {
    profileActions,
    PostType,
    ProfileStateType,
    profileReducer,
} from "./profile-reducer";

const { addPost, setUserProfile, toggleIsFetching, setStatus } = profileActions;

let state: ProfileStateType;

beforeEach(() => {
    state = {
        postsData: [
            { id: 1, message: "Hello", likesCount: 9 },
            { id: 2, message: "Hi", likesCount: 7 },
        ],
        profile: {} as ProfileApiGetProfileType,
        isFetching: false,
        status: "",
    };
});

test("new post should be added", () => {
    const newPost: PostType = { id: 5, message: "hello", likesCount: 0 };

    const endState = profileReducer(state, addPost("hello"));

    expect(endState.postsData.length).toBe(3);
    expect(endState.postsData[2].id).toBe(5);
    expect(endState.postsData[2].message).toBe("hello");
    expect(endState.postsData[2].likesCount).toBe(0);
});

test("profile user should be set", () => {
    const data: ProfileApiGetProfileType = {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small:
                "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large:
                "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
        },
    };

    const endState = profileReducer(state, setUserProfile(data));

    expect(endState.profile.userId).toBe(2);
    expect(endState.profile.fullName).toBe("samurai dimych");
});

test("isFetching should be toggle", () => {
    const endState = profileReducer(state, toggleIsFetching(true));
    expect(endState.isFetching).toBeTruthy();

    const endState2 = profileReducer(endState, toggleIsFetching(false));
    expect(endState2.isFetching).toBeFalsy();
});

test("status should be changed", () => {
    const endState = profileReducer(state, setStatus("hello"));
    expect(endState.status).toBe("hello");
});
