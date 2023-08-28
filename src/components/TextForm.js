import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState('');
    const handleUpclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success");
    }
    const handleclrclick = ()=>{
        setText('');
    }
    const handlecopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleonchange = (event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
  <div className="form-group">
    <label htmlFor="mybox"></label>
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleclrclick}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length}  words and {text.length} characters</p>
        <p>{ 0.008*text.split(" ").length}  to Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
        </>
  )
}
