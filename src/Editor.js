import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor(){
    return (
        <div className="editor-box">
            <div className="editor-header">
                <input type="text"></input>
                <div className="editor-buttons">
                    <label>Save</label>
                    <label>Delete</label>
                </div>
            </div>
            <input type="datetime-local"></input>
            <div className="editor-body">
                <ReactQuill theme = "snow" placeholder='Your Note Here'/>
            </div>
        </div>
    );
}


export default Editor;