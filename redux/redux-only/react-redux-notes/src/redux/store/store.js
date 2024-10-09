import { createStore } from "redux";
import notesReducer from "../reducer/noteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(notesReducer, composeWithDevTools());

export default store;
