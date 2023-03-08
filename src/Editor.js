import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from "react"
import {useOutletContext, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Editor(){

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    let currDate = now.toISOString().slice(0, 16);

    const [note, setNote] = useOutletContext();
    const {id} = useParams();
    const activeNote = note.find(currNote => currNote.id === id);

    const [body, setBody] = useState(activeNote.body);
    const [title, setTitle] = useState(activeNote.title);
    const [date, setDate] = useState(activeNote.date || currDate);

    let nav = useNavigate();

    const saveNote = () => {
        activeNote.body = body;
        activeNote.title = title;
        activeNote.date = date;
        localStorage.setItem("lNotes", JSON.stringify(note));
        nav(`/${activeNote.id}`, {replace:true});
    }

    const deleteNote = () => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            const updatedArr = note.filter(currNote => currNote.id !== id);
            setNote(updatedArr);

            if (updatedArr.length > 0){
                nav(`/${updatedArr[0].id}`, {replace: true});
            }
            else {
                nav(`/`, {replace: true});
            }
        }
    }

    return (
        <div id="editor-box">
            <div className="editor-header">
                <input className="editor-header-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <div className="editor-buttons">
                    <label onClick={saveNote}>Save</label>
                    <label onClick={deleteNote}>Delete</label>
                </div>
            </div>
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)}></input>
            <div className="body">
                <ReactQuill theme = "snow" placeholder='Your Note Here' value={body} onChange={setBody}/>
            </div>
        </div>
    );
}

export default Editor;