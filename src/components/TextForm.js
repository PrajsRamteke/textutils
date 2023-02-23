import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClickUpper=()=>{
        // console.log("Uppercase button click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleUpClickLower=()=>{
        // console.log("Lowercasse button click")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","warning");
    }
    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Clear Your Text","danger");
    }
    const copytext=()=>{
        // console.log("click copy btn");
     navigator.clipboard.writeText(text);
     props.showAlert("Your text has been Copy","success");
    }

    const handleUpChange=(event)=>{
        setText(event.target.value)
    }

    const Extraspaces=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All Extra Spaces Remove","success");
    }

  const [text, setText] = useState("");

  return (
    <>
     <div className="container my-3" style={{color: props.mode === 'dark'? '#F9F9F9':'#1E1E1E'}}>
        <h3>{props.heading}</h3>
     <div className="mb-3">
      <textarea value={text} style={{backgroundColor: props.mode === 'dark'? '#1E1E1E':'#F9F9F9' ,color: props.mode === 'dark'? '#F9F9F9':'#1E1E1E'}}  onChange={handleUpChange} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
     </div> 
      <button onClick={handleUpClickUpper} className="btn btn-primary me-3">Convert to Uppercase</button>
      <button onClick={handleUpClickLower} className="btn btn-warning me-3">Convert to Lowercase</button>
      <button onClick={Extraspaces} className="btn btn-primary me-3">Remove Extraspaces</button>
      <button onClick={handleClearClick} className="btn btn-danger me-3">Clear All</button>
      <button onClick={copytext} className="btn btn-success me-3">Copt Text</button>
     </div>  

     <div className="container my-5 border border-3" style={{color: props.mode === 'dark'? '#F9F9F9':'#1E1E1E'}}>
        <h3>Your text Summary</h3>
        <h6>{text.split(" ").length} Words and {text.length} Characters</h6>
        <h6>{0.008 * text.split(" ").length} Minutes read</h6>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter text to Preview" }</p>
     </div>
    </>
  )
}
