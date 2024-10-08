const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

// https://jsonplaceholder.typicode.com/posts

// custom middleware
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("logger", action);
      next(action);
    };
  };
};
customLogger();
//  initialState
const initialState = {
  posts: [],
};

//Actions
const fetchPostsRequest = () => {
  return {
    type: "REQUEST_STARTED",
  };
};
const fetchPostsSuccess = () => {
  return {
    type: "FETCH_SUCCESS",
  };
};
const fetchPostFailed = () => {
  return {
    type: "FETCH_FAILED",
  };
};

//Reducers
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return {
        posts: ["HTML"],
      };
  }
};
//store
const store = createStore(
  postReducer,
  applyMiddleware(loggerMiddleware, customLogger)
);

//Subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
//dispatch
store.dispatch(fetchPostsRequest());
