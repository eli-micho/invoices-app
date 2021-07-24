import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './../../redux/features/users/userSlice';
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

export default function LoginForm() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };
    return (
        <div className="formWrap tabContent">
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
                                    control={<Checkbox color="primary"/>}
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
    )
}
