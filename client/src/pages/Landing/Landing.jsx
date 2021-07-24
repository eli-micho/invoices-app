import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
                    <Tabs>
                        <TabList>
                            <Tab>Sign Up</Tab>
                            <Tab>Log In</Tab>
                        </TabList>

                        <TabPanel>
                            <RegisterForm/>
                        </TabPanel>
                        <TabPanel>
                            <LoginForm/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div> 
    )
}
