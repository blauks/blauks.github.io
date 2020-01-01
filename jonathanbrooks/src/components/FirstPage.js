import React from 'react';
import './FirstPage.css';
import meInWales from '../images/Forside.png';
import thisGuy from '../images/DenneKaren.png';
import Emoji from './Emoji.js';

function FirstPage() {
    return (
        <div className="firstpage">
            <img alt="Me in Wales" src={meInWales} className="backgroundPOne"/>
            <img alt="Pil som peker på meg" src={thisGuy} className="arrow"/>
            <div className="infotextDiv">
                <h1 className="name">Jonathan Brooks</h1>
                <div className="infotextTLDR">
                    <h2>Student <Emoji emoji="👨‍🎓" label="student"/></h2>
                    <h2>Programmerer <Emoji emoji="💻" label="computer"/></h2> 
                    <h2>Liker:</h2>
                    <h2>- Dataspill og hacking <Emoji emoji="👾" label="alien"/></h2>
                </div>
            </div>
        </div> 
    )
}

export default FirstPage;