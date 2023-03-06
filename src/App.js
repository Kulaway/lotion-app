import { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import NotesMenu from "./NotesMenu";
import Editor from "./Editor";

function App() {
  const [notes, newNote] = useState([]);

  const addNote = () => {
    const note = {
      id: uuid(),
      title: "Untitled",
      date: Date.now(),
      body: "",
    };

    newNote([note, ...notes]);

  }

  return (
    <div className="page">

      <div className="header-flex">
        <label id="menu">&#9776;</label>
        <div id="title">
          <h1>Lotion</h1>
          <p>Like Notion, but worse.</p>
        </div>
      </div>

      <div className="main">
        <NotesMenu notes={notes} addNote={addNote}></NotesMenu>
        <Editor></Editor>
      </div>

    </div>
  );
}

export default App;