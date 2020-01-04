import React from 'react'
import InlineLink from './InlineLink.js';

const Text = props => {
    const getYearsFromBirthday = function () {
        let today = new Date()
        return today.getMonth() <= 9 && today.getDate() < 6 ? today.getFullYear() - 2000 : today.getFullYear() - 1999 
    }

    return (
    <div className={props.className}>
        <h1>Hei!</h1>

        <p>Jeg heter Jonathan Brooks, er {getYearsFromBirthday()} år og studerer Informatikk ved NTNU i Trondheim.</p> 
        <p>På fritiden liker jeg å kode på diverse småprosjekter, bli med på <InlineLink text ="CTF" link="https://dev.to/molly_struve/learn-how-to-hack-capture-the-flag-for-beginners-744" target="new-tab"/>-konkurranser og hjelpe til der jeg kan i <InlineLink text="Linjeforeningen Online" link="https://online.ntnu.no/" target="new-tab"/>.</p>
        <p>Teknologiene jeg holder mest på med akkurat nå er React, Javascript, Python og Java, men jeg prøver alltid å lære nye ting!</p>
        <p>Sånn ellers ville jeg sagt at jeg er en jovial og ærlig person som noen ganger prokastinerer litt for mye:)</p>
        
        <h2>Personlige prosjekter:</h2>
        <p>Denne nettsiden. <InlineLink text="Github-repoet" link="https://github.com/blauks/jonathanbrooks" target="new-tab"/></p>
        <p>To be expanded....</p>

        <h2>Jobb og verv:</h2>
        <p><u>Drifts- og utviklingskomitéen i Online</u>, Sept. 2018-nå:</p>
        <div className="jobbOgVerv">
            <p>I tillegg til å hjelpe til med utvikling i komitéen, er jeg også økonomiansvarlig. 
                Som vil si at vervet mitt ikke bare går ut på å arbeide på de diverse prosjektene vi har, men
                jeg holder også styr på økonomien til komitéen vår og er med på å sette de årlige budsjettene til Linjeforeningen Online.
                Fra vervet mitt har jeg lært alt fra små triks man kan gjøre for å kode mer effektivt til hvordan bedrifter håndterer
                økonomien sin, som hjelper mye når jeg starter nye prosjekter.
            </p>
        </div>
        <p><u>Læringsassistent i IT2805 Webteknologi NTNU</u>, Sept. 2019 - Des. 2019:</p>
        <div className="jobbOgVerv">
            <p>
                Som læringsassistent hjalp jeg studenter med problemer relatert til HTML, Javascript og CSS. 
                Jeg rettet også øvingene til studentene. Denne stillingen har gjort at jeg har blitt bedre på å lære bort, og
                sett hvor viktig det er å gå over noe du har gjort flere ganger.
            </p>
        </div>
    </div>
    )  
}

export default Text;