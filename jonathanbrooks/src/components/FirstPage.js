import React from 'react';
import './FirstPage.css';
import meInWales from '../images/Forside.png';
import thisGuy from '../images/DenneKaren.png';

function FirstPage() {
    return (
        <div className="firstpage">
            <img alt="Me in Wales" src={meInWales} className="backgroundPOne"/>
            <img alt="Pil som peker på meg" src={thisGuy} className="arrow"/>
            <div className="infotextDiv">
                <h1 className="name">Jonathan Brooks</h1>
                <div className="infotextTLDR">
                    <h2>Student og datagutt</h2> 
                </div>
            </div>
        </div> 
    )
}

export default FirstPage;