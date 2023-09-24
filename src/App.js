import {  useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Example from './Component/Example';
import About from './Component/About';
 
function App(){
  const [mode, setMode] = useState('light');
  const [mode1,setMode1] = useState('dark');

 
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      setMode1('light');
      document.body.style.backgroundColor = '#072f55';
      document.title = "TextUtils-Darkmode";
    }
    else {
      setMode('light');
      setMode1('dark');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils-Lightmode";
    }
  }
  return(
  <>
  <Navbar title="Textcounter" aboutText="About Textcounter"  mode={mode}  mode1={mode1} toggleMode={toggleMode}/>
  {/* <Navbar /> */}
  <div className="container my-3">
    <TextForm heading="Enter Text to Analyze" mode={mode}/> 
  </div>
  <div className='container'>
    <About />
  </div>
  {/* <Example /> */}
  </>
  );
}

export default App;

