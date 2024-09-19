import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {
        //console.log("Uppercase was clicked.." + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("On changes");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpperClick} >Convert To Upper Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lower Case</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}