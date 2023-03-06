function NotesMenu({ notes, addNote }){
    
    return(
        <div className="note-menu-box">
            <div className="note-menu-header">
                <h1>Notes</h1>
                <label onClick={addNote}><h3>+</h3></label>
            </div>
            <div className="note-menu-notes">
                {notes.map(({id, title, date, body}, i) => (
                    <div className="note">
                        <div className="note-title">
                            <strong>{title}</strong>
                        </div>
                        <p>{body && body.substr(0, 80) + "..."}</p>
                        <small>             
                            {new Date(date).toLocaleDateString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotesMenu;