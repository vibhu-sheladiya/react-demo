import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("Uppercase Was Click"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }
  const handleLowerClick=()=>{
      let newText=text.toLowerCase();
    setText(newText);
   props.showAlert("converted to lowercase","success")
  }
  const handleClearClick=()=>{
       let newText= '';
    setText(newText);
   props.showAlert("clear done","success")

   
  }
  const handleCopyClick=()=>{
    
    navigator.clipboard.writeText(text);
   
   props.showAlert("copy to word","success");

  }
  const handleSpaceClick=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove space","success")
 
  }
  const handlePasteClick=async()=>{
    const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      props.showAlert("ready to paste word","success")

  }
  const handleOnClick=(e)=>{
    console.log(e.target.value,"on change");
    setText(e.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
   <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}    </h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Lower Case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handlePasteClick}>paste Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Space</button>


  

  </div>
  <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
    <h2 className='mb-2'>Your Text Nutshell</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length}Minutes To Read</p>
    {/* 1/125=0.008 link:-https://capitalizemytitle.com/reading-time/1-/#:~:text=The%20average%20reader%20will%20read,on%20your%20average%20reading%20speed. */}
  <h2>Overview </h2>
  <p>{text.length>0?text:"nothing to preview"}</p>
  </div>
  </>
  )
}
