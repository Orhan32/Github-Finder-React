import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  return (
    <tr>
      <td style={{ width: "40%" }}>{note.title}</td>
      <td>{note.body}</td>
      <td style={{ width: "3%" }}>
        <button
          onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
          className="btn btn-sm btn-danger"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </td>
    </tr>
  );
};

export default Note;
