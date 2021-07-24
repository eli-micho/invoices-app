import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

//MaterialUI
import { makeStyles } from '@material-ui/core';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

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

export default function RegisterForm() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            password.setCustomValidity("Passwords do not match!")
        }else {
            const user = {
                username: name,
                email: email,
                password: password
            };
            try{
                await axios.post("/auth/register", user);
                history.push("/invoices");
            }catch(err){
                console.log(err)
            }
        }
    };
    return (
        <div className="formWrap tabContent">
                        <Button
                            variant="outlined"
                            className="loginBtn" 
                        >
                            Sign up with Google
                        </Button>
                        <div className="emailLoginTitle">
                            <hr/>
                            <span>or Sign up with Email</span>
                            <hr/>
                        </div>
                        <form className={classes.root} onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
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
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <div>
                                <FormControlLabel
                                    value="remember"
                                    control={<Checkbox color="primary"/>}
                                    label="I agree to the Terms & Conditions"
                                />
                            </div>
                            <div>
                                <Button 
                                    type="submit" 
                                    variant="outlined"
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <p>Already have an account?<a href="#"> Sign In</a></p>
                        </form>
                    </div>
    )
}
