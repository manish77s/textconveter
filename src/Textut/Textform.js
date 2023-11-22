import React, { useState } from 'react'

const Textform = (props) => {
    const [text,setText]= useState('');

    const handleUpClick = ()=>{
     
       let newT= text.toUpperCase();
       setText(newT);
       props.showAlert("Converted to Uppercase","success")
       document.title = "Textutilles Converted-Uppercase"
    }
    const handleLoClick = ()=>{
     
      let newT= text.toLowerCase();
      
      setText(newT);
      props.showAlert("Converted to Lowercase","success")
      document.title = "Textutilles Converted-lowercase"
   }

   const handleClear = ()=>{
     let newT= "";
     setText(newT);
     props.showAlert("Text cleared","success")
     document.title = "Textutilles text-cleared"
 }

   const handleCopy = ()=>{
    //  let text = document.getElementById('myBox')
    //  text.select()
     navigator.clipboard.writeText(text)
    //  document.getSelection().removeAllRanges();
     props.showAlert("Text copied to clipbord","success")
     document.title = "Textutilles text-copied"
 }

 const handleRemoveSpace = ()=>{
  let newT=  text.split(/[ ]+/);
  setText(newT.join(' '));
  document.title = "Textutilles space-removed"
     
}
  
    const handleChange = (event)=>{
          
       setText(event.target.value);
       
    }
  return (
    <>
    <div>
      <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
      <div className="input-group">
  {/* <span className="input-group-text"></span> */}
  <textarea className="form-control my-1" aria-label="With textarea" rows='5' id='myBox' style={{backgroundColor: props.mode==='dark'?'rgb(222 226 230)':'white'}} value={text} onChange={handleChange}></textarea>
</div>
        <button className='btn btn-primary' onClick={handleUpClick} >Convert to upercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClear} >Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleRemoveSpace} >Remove Extra Space</button>
    </div>
     <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
    </>
  )
}

export default Textform;