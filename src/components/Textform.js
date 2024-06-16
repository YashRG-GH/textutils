import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const HandleUPclick=()=>{
        // console.log("Uppercase has been clicked");
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showalert("Text converted to Uppercase","success");
    }

    const HandleLOclick=()=>{
      // console.log("Uppercase has been clicked");
      let newtext= text.toLowerCase();
      setText(newtext);
      props.showalert("Text converted to Lowercase","success");
  }

  const HandleCLclick=()=>{
    // console.log("Uppercase has been clicked");
    let newtext= '';
    setText(newtext);
    props.showalert("Text cleared","success");
}

const HandleTRclick=()=>{
  // console.log("Uppercase has been clicked");
  let newtext= text.trim("text");
  setText(newtext);
  props.showalert("Text trimmed","success");
}

    const Handleonchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const[text,setText]= useState("");

    return (
      <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
        {props.Heading}

  <div className="Container"  >
    <textarea className="text1" id="myBox"  value={text} style={{backgroundColor: props.mode==='light'?'white':'#34393f', color: props.mode==='light'?'black':'white'}} onChange={Handleonchange}  cols="100" rows="10"></textarea>
  </div>

  <button className="btn btn-primary mx-1" onClick={HandleUPclick}>Convert to Uppercase</button>

  <button className="btn btn-primary mx-1" onClick={HandleLOclick}>Convert to Lowercase</button>

  <button className="btn btn-primary mx-1" onClick={HandleCLclick}>Clear Text</button>

  <button className="btn btn-primary mx-1" onClick={HandleTRclick}>Trim text</button>
    
    
    </div>

    <div className="Container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Text info</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview here"}</p>


    </div>


    </>
  )
}

Textform.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired
};