import React from 'react';
import Navbar from './Textut/Navbar';
import Textform from './Textut/Textform';
import { useState } from 'react';
import Alert from './Textut/Alert';

// import './App.css';
// import Formcompo from './Formclass';


function App() {
  const [mode,setMode]= useState('light')
  const [alert,setAlert]= useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
       setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
  
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode Enabled", "success")
      document.title = "Textutilles  Dark Mode"
     
     }
     else{
        setMode('light')
        document.body.style.backgroundColor= "white";
        showAlert("Ligth Mode Enabled", "success")
        document.title = "Textutilles  Ligth Mode"
     }
    }
    
  return (
          <>
          {/* <h1 className='head'>EMPLOYEE FEEDBACK FORM</h1> 
          <Formcompo/> */}
          <Navbar title="textUtile" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          
          <div className="container my-3"><Textform heading='Textutils - For converte Uppercase, Lowercase, copy text, remove extra spaces' showAlert={showAlert} mode={mode}/></div>
 </>
  );
}

export default App;
