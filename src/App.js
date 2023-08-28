import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
if(Mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='#042743';
  showAlert("Darkmode has been enabled","success")
}else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light has been enabled","success")
}
  }
  return (
   <>
  <BrowserRouter>

<Navbar title='TextUtils' abouttext='About Us' mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert}/>}/>
</Routes>
{/*<About/>*/}
</div>
   </BrowserRouter>
   </>
  );
}

export default App;
