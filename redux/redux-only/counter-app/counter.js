// steps
const { createStore } = require("redux");
// Initial State

const initialState = {
  count: 0,
};

// actions -action  -action creator

//Increment
// decrement
//reset
// increase by amount

//action
{
  type: "INCREMENT";
}

//Increase Action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
//decrease Action creator
{
  type: "DECREMENT";
}

const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
//RESET Action creator
{
  type: "RESET";
}
const resetAction = () => {
  return {
    type: "RESET",
  };
};
//Increse  Action by amount creator
{
  type: "INCREASE_BY_AMT";
}
const increaseByAmountAction = (anyAmount) => {
  return {
    type: "INCREASE_BY_AMT",
    payload: anyAmount,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMT") {
    return {
      count: state.count + action.payload,
    };
  }
};
// store
const store = createStore(counterReducer);

// // get state
// const stateData = store.getState();
// subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch action

// increment
store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());

// decrement

store.dispatch(decrementAction());
// reset
store.dispatch(resetAction());

// dispatch action with payload

store.dispatch(increaseByAmountAction(10));
