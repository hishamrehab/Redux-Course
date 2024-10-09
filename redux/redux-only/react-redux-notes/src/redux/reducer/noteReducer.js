import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "../actions/notesActionTypes";

//Initial State
const initialState = {
  notes: [],
};

//notes reducer
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      // new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      // add note  to storage
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return {
        notes: [...state.notes, newNote],
      };

    // fetch notes
    case FETCH_NOTE:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };

    // delete note
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      // Re save to loacalStorage
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return {
        ...state,
        notes: filteredNotes,
      };
    default:
      return state;
  }
};

export default notesReducer;
