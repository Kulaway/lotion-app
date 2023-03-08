export default function Note ({ id, title, date, body}) {
    if(body.length > 80){
        var sub = body && body.substr(0, 100) + "...";
    }
    else {
        var sub = body;
    }
    
    return (
        <div className="note">
            <div>
                <strong>{title}</strong>
            </div>
            <small>             
                {date}
            </small>
            <p dangerouslySetInnerHTML={{__html: sub}}></p>
      </div>
    );
}