// steps

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

{
  type: "INCREASE_BY_AMT";
}
const increaseByAmountAction = () => {
  return {
    type: "INCREASE_BY_AMT",
  };
};

// reduce

// store
