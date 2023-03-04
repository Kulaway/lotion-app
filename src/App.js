import { useState } from "react";

function App() {
  function toggleNotes(){
    let x = document.getElementById("notes");
    let y = document.getElementById("editor");
    if(x.style.display === "none") {
      x.style.display = "block";
      y.setAttribute("style", "width: 85%");
    }
    else {
      x.style.display = "none";
      y.setAttribute("style"," width: 100%");
    }
  }

  function addNote() {
    let note = document.createElement("h3");
    note.classList.add("note");
    note.innerText = "Untitled";
    document.getElementById("notes").appendChild(note);
  }

  return (
    <div class="page">

      <div class="header-flex">
        <label id="menu" onClick={toggleNotes}>&#9776;</label>
        <div id="title">
          <h1>Lotion</h1>
          <p>Like Notion, but worse.</p>
        </div>
      </div>

      <div class="main">
        <div id="notes">
          <div id="notes-header">
            <h1>Notes</h1>
            <label onClick={addNote}><h2>+</h2></label>
          </div>
          
          <div id="notes-menu">
            
          </div>
        </div>

        <div id="editor">
          <h1>Select A Note, Or Create A New One</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
