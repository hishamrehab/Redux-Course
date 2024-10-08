import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteNoteAction,
//   fetchNotesAction,
// } from "../redux/actions/notesAction";

import "./NotesList.css";

const NotesList = () => {
  //dispatch

  // useEffect(() => {
  //   dispatch(fetchNotesAction());
  // }, []);
  //get data from store
  // const notes = useSelector(storeData => {
  //   return storeData.notes;
  // });

  return (
    <>
      <h1>Notes List</h1>


      <div className="item-container">
        <div className="item-content">
          <h2>hello</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus, doloribus dolor enim nostrum odio sint voluptates. Quia corporis at, deleniti maiores aliquam architecto consequatur officiis, enim, in iure quis?</p>
          <button>
            Delete
          </button>
        </div>
      </div>

    </>
  );
};

export default NotesList;
