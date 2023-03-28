import React , {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
  
  
  const toggleMode = () => {
    if(mode === 'light'){ 
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Enable" , "Success");
      document.title = "TextUtils - Dark Mode is Enable";
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enable" , "Success");
      document.title = "TextUtils - Light Mode is Enable";
    }
  }

  // const [redish  , setRedish] = useState('light');

  // const redishMode = () => {
  //   if(redish === 'light'){
  //     setRedish('red');
  //     document.body.style.background = "red";
  //     showAlert("Redish Mode is Enable" , "Success");
  //   }
  //   else{
  //     setRedish('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode is Enable" , "Success");
  //   }
  // }

  // const [bluish  , setBluish] = useState('light');

  // const bluishMode = () => {
  //   if(bluish === 'light'){
  //     setBluish('blue');
  //     document.body.style.background = "blue";
  //     showAlert("Bluish Mode is Enable" , "Success");
  //   }
  //   else{
  //     setBluish('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode is Enable" , "Success");
  //   }
  // }

  // const [grenish  , setGrenish] = useState('light');

  // const grenishMode = () => {
  //   if(grenish === 'light'){
  //     setGrenish('green');
  //     document.body.style.background = "green";
  //     showAlert("Bluish Mode is Enable" , "Success");
  //   }
  //   else{
  //     setGrenish('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode is Enable" , "Success");
  //   }
  // }

  // alert work starts below adding alert in text box and dark mode as well as on button of uppercase and lower case

  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      {/* error de ga Q ke title string nhi ha */}

      {/* ttile nhi ha tu ye degault wala le ga  */}
      {/* <Navbar/> */}

 
      {/* <Navbar title ={77} aboutText = "About us" /> */}

      {/* ye is liye jab hum in ko red blue aur green color b dena cahiye*/}
      {/* redishMode={redishMode} bluishMode={bluishMode} grenishMode={grenishMode} */}
      {/* <Router> */}
          <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
         {/* <Routes>
            <Route exact path="/about" element={ <About /> }> </Route> */}
          {/* {/* <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the texts and see Changes" mode={mode} />  }> </Route> */}
        {/* </Routes>
      </Router> */}
      <TextForm showAlert={showAlert} heading="Enter the texts and see Changes" mode={mode} />
    </>
  );
}

export default App;