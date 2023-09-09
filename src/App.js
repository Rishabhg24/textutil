import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState} from 'react';

function App() {
  const [mode,setMode]=useState('light'); 
   const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#e9ecef';
    }
   }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
       <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
