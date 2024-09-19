import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked.." + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On changes");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here..");

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
        </div>
    )
}