import {
    profileActions,
    PostType,
    ProfileStateType,
    profileReducer,
    ProfileType,
} from "./profile-reducer";

const {
    addPost,
    updateNewPostText,
    setUserProfile,
    toggleIsFetching,
} = profileActions;

let state: ProfileStateType;

beforeEach(() => {
    state = {
        postsData: [
            { id: 1, message: "Hello", likesCount: 9 },
            { id: 2, message: "Hi", likesCount: 7 },
        ],
        newPostText: "",
        profile: {} as ProfileType,
        isFetching: false,
    };
});

test("new post should be added", () => {
    const newPost: PostType = { id: 5, message: "hello", likesCount: 0 };
    state.newPostText = newPost.message;
    console.log("test");

    const endState = profileReducer(state, addPost());

    expect(endState.postsData.length).toBe(3);
    expect(endState.newPostText).toBe("");
    expect(endState.postsData[2].id).toBe(5);
    expect(endState.postsData[2].message).toBe("hello");
    expect(endState.postsData[2].likesCount).toBe(0);
});

test("newPostText should be update", () => {
    const newMessage = "ra";

    const endState = profileReducer(state, updateNewPostText(newMessage));

    expect(endState.newPostText).toBe("ra");
});

test("profile user should be set", () => {
    const data: ProfileType = {
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
