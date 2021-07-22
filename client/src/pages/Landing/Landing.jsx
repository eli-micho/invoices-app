import { useState } from 'react';
import './styles.scss';

import Form from '../../components/Form/Form';

//MaterialUI
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core';
import { TextField, Button, Radio, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
          },
    }
}));

export default function Landing() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  
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
                    <div className="formWrap">
                        <div className="loginTitle">
                            <h2>Login</h2>
                            <p>Welcome back! Login in and get tracking.</p>
                        </div>
                        <Button
                            variant="outlined"
                            className="loginBtn" 
                        >
                            
                            Sign in with Google
                        </Button>
                        <div className="emailLoginTitle">
                            <hr/>
                            <span>or Sign in with Email</span>
                            <hr/>
                        </div>
                        <form className={classes.root} onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <div>
                                <FormControlLabel
                                    value="remember"
                                    control={<Radio/>}
                                    label="Remember Me"
                                />

                                <a href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div>
                                <Button 
                                    type="submit" 
                                    variant="outlined"
                                >
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           {/*  <h2>Invoices App</h2>
            <img src="assets/pay_online.svg" alt="" className="landingImg" />
            
            <div className="bottom">
                <Button 
                    variant="outlined" 
                    size="large" 
                    className="landingBtn" 
                    onClick={handleOpen}
                >
                    Sign In
                </Button>
                <Button variant="outlined" size="large" className="landingBtn">Register</Button>
           </div> */}
        </div> 
    )
}
