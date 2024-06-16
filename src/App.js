import './App.css';
import React, {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light');

  const  [alert,setalert]= useState()
  
  const showalert=(message,type)=>{
    setalert({
    msg: message,
    type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const changemode =()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#34393f'
      showalert("Darkmode has been enabled","success")
      document.title ='TextUtils-Dark'
      // setInterval(() => {
      //   document.title ='Download TextUtils now!!'
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Edit text the way u want'
      // }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Lightmode has been enabled","success")
      document.title ='TextUtils-Light'
    }

  };

  return (
   <>
   {/* <BrowserRouter> */}
  <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} changemode={changemode}/>
  <Alert alert={alert} />
  <div className={`container my-3`}>
    {/* <Routes> */}
    {/* <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/" element={<Textform Heading="Enter the text to convert" showalert={showalert} mode={mode} />}></Route>  */}
    <Textform Heading="Enter the text to convert" showalert={showalert} mode={mode} />
    {/* </Routes> */}
 </div>
    {/* </BrowserRouter> */}

   </>
  );
}

export default App;
