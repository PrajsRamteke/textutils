import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import AboutUs from './components/AboutUs'; 

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>
  {
    if(mode ==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#1E1E1E";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#F9F9F9";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <div>
       <Navbar mode={mode} toggleMode={toggleMode} title="Portfolio" Name01="Home" Name02="About" Name03="Blog"/>
       <Alert alert={alert}/>
       <TextForm showAlert={showAlert} mode={mode} heading ="Text Analyzer"/>
       <AboutUs/>
       hello ji
       dadu
    </div>
  );
}

export default App;
