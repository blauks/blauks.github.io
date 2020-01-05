import React from 'react';
import './ThirdPage.css';
import Link from './Link.js';
import megMedKona from '../images/æåkona.png';
import GithubLogo from '../images/GithubLogo.png';
import LinkedinLogo from '../images/LinkedinLogo.png';
import InstagramLogo from '../images/InstagramLogo.png';

function ThirdPage() {

    return(
        <div className="thirdpage">
            <div className="mainThird">
                <div className="infobox">
                    <div className="topText">
                        <div className="imgWrapper">
                            <img src={megMedKona} alt="meg med kona" className="megmedkona"/>
                        </div>
                        <div className="generellInfo">
                            <p>Jonathan Brooks</p>
                            <p>Trondheim</p>
                            <p>brooks.jonathan1@gmail.com</p>
                            <p>+47 412 55 429</p>
                        </div>
                    </div>
                    <div className="bottomText">
                        <Link link="https://github.com/blauks/" target="new-tab" text={<img className="logo" src={GithubLogo} alt="Github logo"/>}/>
                        <Link link="https://www.linkedin.com/in/brooks-jonathan/" target="new-tab" text={<img className="logo" src={LinkedinLogo} alt="Linkedin logo"/>}/>
                        <Link link="https://www.instagram.com/jonybrooks/" target="new-tab" text={<img className="logo" src={InstagramLogo} alt="Instagram logo"/>}/>
                        <p>blauks</p>
                        <p>brooks-jonathan</p>
                        <p>jonybrooks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;