import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/NotesContext";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return notes.map((note, index) => <Note key={index} note={note} />);
};

export default NoteList;
