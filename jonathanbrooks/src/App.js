import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage.js';
import SecondPage from './components/SecondPage.js';

function App() {
  return (
    <div className="App">
      <FirstPage className="firstpage"/>
      <SecondPage className="secondpage"/>
    </div>
  );
}

export default App;
