import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';
import Alert from './components/AlertMessage';

import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //alert will be an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a161b';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been enabled', 'success');
    }
  };
  return (
    <>
      <Router>
        <NavBar title="WordWizard" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="WordWizard – Transform, Analyze, and Elevate Your Text!🚀✨" mode={mode} />
           } />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
