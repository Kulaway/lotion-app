import { useState, useEffect } from "react";
import Note from "./Note.js"
import {v4 as uuid} from "uuid";
import { useNavigate, Outlet, NavLink} from "react-router-dom";

function Layout() {
  const [notes, setNote] = useState(JSON.parse(localStorage.getItem("lNotes")) || []);
  const nav = useNavigate();

  useEffect(() => {
    localStorage.setItem("lNotes", JSON.stringify(notes));
  }, [notes]);

  const toggleMenu = () =>  {
    let x = document.getElementById("note-menu-box");
    let y = document.getElementById("editor-box");
    if(x.style.display === "none"){
      x.style.display = "block";
      y.setAttribute("style", "width: 80vw");
    }
    else {
      x.style.display = "none";
      y.setAttribute("style", "width: 100vw");
    }
  }

  const addNote = () => {
    var newNote = {
      id: uuid(),
      title: "Untitled",
      date: "",
      body: "",
    };

    setNote([newNote, ...notes]);
    nav(`/${newNote.id}/edit`, {replace:true});
  };

  if (notes.length == 0){
    return (
      <div className="page">
  
      <div className="header-flex">
        <div id="menu">
          <label onClick={toggleMenu}>&#9776;</label>
        </div>
        <div id="title">
          <h1>Lotion</h1>
          <h5>Like Notion, but worse.</h5>
        </div>
      </div>

      <div className="main">
        <div id="note-menu-box">
              <div className="note-menu-header">
                  <h1>Notes</h1>
                  <label onClick={addNote}><h3>+</h3></label>
              </div>
              <div className="no-notes-menu">
                <h1 className="no-note">No Notes</h1>
              </div>
          </div>
          <div className="no-notes-box">
            <h1 className="no-note">Select Note or Create a New One</h1>
          </div>
      </div>
    </div>
    );
  }
  else {
    return (
      <div className="page">
  
        <div className="header-flex">
          <div id="menu">
            <label onClick={toggleMenu}>&#9776;</label>
          </div>
          <div id="title">
            <h1>Lotion</h1>
            <h5>Like Notion, but worse.</h5>
          </div>
        </div>
  
        <div className="main">
          <div id="note-menu-box">
                <div className="note-menu-header">
                    <h1>Notes</h1>
                    <label onClick={addNote}><h3>+</h3></label>
                </div>
                <div className="note-menu-notes">
                  {notes.map(note => (
                    <NavLink key={note.id} to={`/${note.id}`}> 
                      <Note id={note.id} title={note.title} date={note.date} body={note.body} />
                    </NavLink>
                  ))}
                </div>
            </div>
            <Outlet context={[notes, setNote]} />
        </div>
      </div>
    );
  }
}

export default Layout;