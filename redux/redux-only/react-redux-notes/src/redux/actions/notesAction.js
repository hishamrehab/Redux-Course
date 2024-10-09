import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "./notesActionTypes";
// Initial state
//actions
// Add note action creator
export const addNoteAction = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

// delete notes action creator
export const deleteNoteAction = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

// fetch notes action creator
export const fetchNotesAction = () => {
  return {
    type: FETCH_NOTE,
  };
};

//store

//dispatch
