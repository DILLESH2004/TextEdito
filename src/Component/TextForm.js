import React, {useState} from 'react'
import About from './About'
export default function TextForm(props) {
    const HandleClearClick = () =>{
        setText("");
    }
    const HandleSpeakClick = () =>{
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle');
      if(toogle.textContent=="Speak"){
        toogle.innerHTML="Stop";
      }else {
        toogle.innerHTML = "Speak";
        if(toogle.innerHTML=="Speak"){
          window.speechSynthesis.cancel();
        }
      }
    }
    const HandleUpClick = () => {
      let newText1 = text.toUpperCase();
      setText(newText1);
    }
    const HandleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    const HandleLowClick = () =>{
      let newText2 = text.toLowerCase();
      setText(newText2);
    }
    const HandleCopy = () =>{
      var text = document.getElementById("MyText");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const HandleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
  const [text, setText] = useState("");
//   setText("New Text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='dark'?'white':'black'}} onChange={HandleOnChange} id="MyText" rows="4"></textarea>
        </div>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1"  onClick={HandleClearClick}>Clear</button>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1"  onClick={HandleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1"  onClick={HandleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1" id="toggle" onClick={HandleSpeakClick}>Speak</button>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1" id="toggle" onClick={HandleCopy}>Copy</button>
        <button className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-1" id="toggle" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p>
      <p>{0.08*((text.split(" ").length)-1)}Minute Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Text To Preview"}</p>
    </div>
    </>
  )
}

