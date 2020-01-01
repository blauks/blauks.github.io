import React from 'react';
import './SecondPage.css';
import MegPåSki from '../images/megPåSki.png';

function SecondPage() {
    return(
        <div className="secondpage">
                <img className="image" alt="Meg på ski" src={MegPåSki}/>
            <div className="text">
            </div>
        </div>
    )
}

export default SecondPage