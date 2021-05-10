import {
    profileActions,
    PostType,
    ProfilePageType,
    profileReducer,
} from "./profile-reducer";

const { addPost, updateNewPostText } = profileActions;

let state: ProfilePageType;

beforeEach(() => {
    state = {
        postsData: [
            { id: 1, message: "Hello", likesCount: 9 },
            { id: 2, message: "Hi", likesCount: 7 },
        ],
        newPostText: "",
    };
});

test("new post should be added", () => {
    const newPost: PostType = { id: 5, message: "hello", likesCount: 0 };
    state.newPostText = newPost.message;

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
