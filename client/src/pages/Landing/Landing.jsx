import { useState } from 'react';
import './styles.scss';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

//MaterialUI



export default function Landing() {
  
    return (
        <div className="landing">
            <div className="wrapper">
                <div className="landingLeft">
                    <h1>Invoices App</h1>
                    <div className="imgWrapper">
                        <img src="assets/pay_online.svg" alt="" className="landingImg" />
                    </div>
                    <p className="landingText">
                        Simple. Elegant. Secure.
                        <br/>
                        Designed for all your invocing needs.
                    </p>
                </div>
                <div className="landingRight">
                    <div className="landingTitle">
                        <h2>Sign Up</h2>
                        <p>Track your invoices and keep your books up to date!</p>
                    </div>
                    <RegisterForm/>
                </div>
            </div>
        </div> 
    )
}
