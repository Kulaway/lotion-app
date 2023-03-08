export default function Note ({ id, title, date, body}) {
    if(body.length > 130){
        var bSub = body && body.substr(0, 130) + "...";
    }
    else {
        var bSub = body;
    }

    if(title.length > 40){
        var tSub = title && title.substr(0, 40) + "...";
    }
    else {
        var tSub = title;
    }



    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };
    
    return (
        <div className="note">
            <div>
                <strong>{tSub}</strong>
            </div>
            <small>             
                {formatDate(date)}
            </small>
            <p dangerouslySetInnerHTML={{__html: bSub}}></p>
      </div>
    );
}