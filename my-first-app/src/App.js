import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;