import React from 'react';
import './SecondPage.css';
import MegPåSki from '../images/megPåSki.png';
import InDepthText from './InDepthText.js';

function SecondPage() {
    return(
        <div className="secondpage">
                <img className="image" alt="Meg på ski" src={MegPåSki}/>
            <div className="text">
                <InDepthText className="infotext"/>
            </div>
        </div>
    )
}

export default SecondPage;