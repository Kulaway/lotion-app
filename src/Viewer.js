import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Viewer({}){
    const [note, setNote] = useOutletContext();
    const {id} = useParams();
    const activeNote = note.find(currNote => currNote.id === id);
    let nav = useNavigate();

    const editNote = () => {
        nav(`/${activeNote.id}/edit`, {replace:true});
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
            <div className="note-header">
                <strong className="note-header-title">{activeNote.title}</strong>
                <div className="editor-buttons">
                    <label onClick={editNote}>Edit</label>
                    <label onClick={deleteNote}>Delete</label>
                </div>
            </div>
            <small className="note-header-date">{activeNote.date}</small>
            <div className="body">
                <p dangerouslySetInnerHTML={{__html: activeNote.body}}></p>
            </div>
        </div>
    );
}

export default Viewer;