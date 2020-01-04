import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage.js';
import SecondPage from './components/SecondPage.js';
import ThirdPage from './components/ThirdPage';

function App() {

  return (
    <div className="App">
      <p id="jegErLat">Har ikke optimalisert for mobil eller små skjermer enda:)</p>
      <FirstPage className="firstpage"/>
      <SecondPage className="secondpage"/>
      <ThirdPage classname="thirdpage"/>
    </div>
  );
}

export default App;