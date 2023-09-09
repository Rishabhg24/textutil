import React,{useState} from 'react'

export default function TextForm(props){
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleClearClick =()=>{
    let newText = "";
    setText(newText)
  }
  const handleOnChange =(event)=>{
    setText(event.target.value)
}
const handleLoClick =()=>{
  let newText = text.toLowerCase();
  setText(newText)
}

  const[text ,setText]=useState('Enter text here');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div class="mb-3">
        <textarea class="form-control" value={text} onChange={handleOnChange} id="Text" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className = "btn btn-primary mx-1" >Convert to uppercase</button>
        <button onClick={handleLoClick} className = "btn btn-primary mx-1" >Convert to lowercase</button>
        <button onClick={handleClearClick} className = "btn btn-primary mx-1" >Clear Text</button>
    </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3> Text summary</h3>
      <p>This text contains {text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split("").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter the text to preview'}</p>
   </div>
</>
  )
}
