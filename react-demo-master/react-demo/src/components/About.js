import React, { useState } from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode=== 'dark'?'white':'#042743',
          backgroundColor:props.mode=== 'dark'?'rgb(36 74 104)':'white',
          
    }
//      const [myStyle, setMyStyle] = useState({
//         color:'black',
//     backgroundColor:'white'
//     })
//     const [btnText, setBtnText] = useState(' light mode')
//    const  toggleStyle=()=>{
//         if(myStyle.color=='black'){
//             setMyStyle({
//                 color:'white',
//                 backgroundColor:'black',
//                 border:'2px solid white'
//             })
//             setBtnText('dark mode')
//         }else{
//             setMyStyle({
//                 color:'black',
//                 backgroundColor:'white'
//             })
//             setBtnText('light mode')
//         }
//     }
  return (
    <div className='container' style={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Text Analysis
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Text Analysis Online Program. Finds most frequent phrases and words, gives overview about text style, number of words, characters, sentences and syllables.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Free To Use
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Free to Use and Reuse Sets. This portal features content that is free to use and reuse. This page features items from the Library's digital collections.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Browser Compatible
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>A web browser is an application for accessing websites and the Internet. When a user requests a web page from a particular website,   </div>
    </div>
  </div>
</div>
<div className="container my-3"></div>
{/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button> */}
    </div>
  )
}
