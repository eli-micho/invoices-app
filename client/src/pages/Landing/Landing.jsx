import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.scss';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

//MaterialUI

const FormTabs = () => {
    
}

export default function Landing() {
    const [formStatus, setFormStatus] = useState(0);
  
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
                   {/*  <div className="landingTitle">
                       {formStatus === 0 
                        ?   <>
                            <div className="signupTitle">
                                <h2>Sign Up</h2>
                                <p>Track your invoices and keep your books up to date!</p>
                            </div>
                            <RegisterForm/>
                            </>
                        : <div className="loginTitle">
                            <h2>Log In</h2>
                            <p>Welcome back! Login in and get to tracking!</p>
                        </div>    
                        }
                    </div> */}
                </div>
            </div>
        </div> 
    )
}
