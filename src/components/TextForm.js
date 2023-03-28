import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("We click the button");
        // setText("You clicked the buttton and change the value")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To uppercase!" , "Success");
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }

    const handleLoClick = () => {
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("Converted To Lowercase!" , "Success");
    }

    const handleClearClick = () =>{
        let newText = ' ';
        setText(newText);
        props.showAlert("Clear the Text!" , "Success");
    }

    const handleCopyClick = () =>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is Copied!" , "Success");
    }

    const [text , setText] = useState("")
    // setText("We write this")

    return (
        <> 
            <div className="container" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ?     'white' : 'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>To Upper Case</button>
                    <button className="btn btn-dark mx-2" onClick={handleLoClick}>To Lower Case</button>
                    <button className="btn btn-success" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-success mx-2" onClick={handleCopyClick}>Copy Text</button>
            </div>

            <div className="container my-3" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Counting of words and character is</h1>
                {/* is me ye ha ke text ko split kro space se jo ke word bany ga aur text ke character ko print kro */}
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>You Read this in</h2>
                <p>{0.008 * text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something in above box for preview"}</p>
            </div>
        </>
    )
}
