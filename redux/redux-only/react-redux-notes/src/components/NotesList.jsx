import React, { useEffect } from "react";
import "./NotesList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, fetchNotesAction } from "../redux/actions/notesAction";


const NotesList = () => {
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchNotesAction()) }, []);

  // get data from store
  const data = useSelector((storeData) => {
    return storeData.notes
  })



  return (
    <>
      <h1>Notes List</h1>
      {data.map((note) => (
        <div className="item-container" key={note.id}>
          <div className="item-content">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button
              onClick={() => dispatch(deleteNoteAction(note.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

    </>
  );
};

export default NotesList;
