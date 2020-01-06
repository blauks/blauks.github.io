import React from 'react';
import './App.css';
import {FirstPage} from './components/FirstPage.js';
import SecondPage from './components/SecondPage.js';
import ThirdPage from './components/ThirdPage';

const bodyStyle = document.body.style;

const h = "hidden";
const v = "visible";
const r = "relative";
const f = "fixed";

const fpv = "--firstPageVis";
const fpp = "--firstPagePos";
const spv = "--secondPageVis";
const spp = "--secondPagePos";
const tpv = "--thirdPageVis";
const tpp = "--thirdPagePos";

const updateFirstState = function () {
  bodyStyle.setProperty(fpv, page === 0 ? v : h);
  bodyStyle.setProperty(fpp,  page === 0 ? r : f);
  bodyStyle.setProperty(spv, page === 1 ? v : h);
  bodyStyle.setProperty(spp,  page === 1 ? r : f);
  bodyStyle.setProperty(tpv, page === 2 ? v : h);
  bodyStyle.setProperty(tpp,  page === 2 ? r : f);
}

let page = 0;

const whichPage = function (a){
  if(a === 0 && page < 2){
    page = page + 1;
  }
  else if(page > 0 && a === 1){
    page = page - 1;
  }
  updateFirstState();
};

function App() {
  return (
    <div className="App">
      <p id="jegErLat">Har ikke optimalisert for mobil eller små skjermer enda:)</p>
      <FirstPage className="first"/>
      <SecondPage className="second"/>
      <ThirdPage classname="third"/>
      <button className="knappOpp" onClick={() => whichPage(1)}>Opp</button>
      <button className="knappNed" onClick={() => whichPage(0)}>Ned</button>
    </div>
  );
}

export {App};