const { createStore, combineReducers } = require("redux");
//initial state
const initialState = {
  posts: [],
};

//users
const usersInitialState = {
  users: [],
};

//Action Types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

const ADD_USER = "ADD_USER";
// Action (action , action creator)
// Add post Creator
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
// user action creator
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Remove post
const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }

  //   if (action.type === ADD_POST) {
  //     return {
  //       posts: [...state.posts, action.payload],
  //     };
  //   } else if (action.type === REMOVE_POST) {
  //     return {
  //       posts: state.posts.filter((post) => {
  //         return post.id !== action.id;
  //       }),
  //     };
  //   } else {
  //     return state;
  //   }
};

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        posts: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
});
// store
const store = createStore(rootReducer);
// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log("posts", data.posts);
  console.log("users", data.users);
});
// dispatch post action

store.dispatch(
  addPostAction({
    id: 1,
    title: "Best Course",
  })
);

store.dispatch(
  addPostAction({
    id: 2,
    title: "How to master redux ",
  })
);

store.dispatch(removePostAction(1));

//add new user
store.dispatch(
  addUserAction({
    name: "John",
    email: "johan@email.com ",
  })
);
