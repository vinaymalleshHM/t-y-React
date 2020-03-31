import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import Axios from 'axios';
import UserContext from '../../context/userContext';

function Copyright(props) {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}));

export default function Form(props) {
    const context = useContext(UserContext)

    const userData = {
        email: '',
        pass: ''
    }
    const [val, setval] = useState(userData)
   
    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [genErr, setGenErr] = useState(false)
  
    const handleChange = (e) => {
        setval({
            ...val,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
      validForm();
    if(val.pass !== '' && val.email !== ''){
        validForm();
        if(fullControl()){
            getAllAccount()
        }
    }

    }
    const validForm = () => {
           if (val.email.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
               setEmailErr(false)
           }
           else {
               setEmailErr(true)
           }   
           if (val.pass.match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) && val.pass !== "") {
               setPassErr(false)
           }
           else {
               setPassErr(true)
           }
    }

    const fullControl = ()=>{
        validForm();
        if (emailErr !== true && passErr !== true) {
            return true
        }
        else{
            return false
        }
    }

   const getAllAccount = () => {
        // event.preventDefault()
        const url = 'https://react-medi.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
          
            for (const key in response.data) {
                let recipe = response.data[key]

                if (recipe.email === val.email && recipe.pass === val.pass) {
                    console.log("email is ok")
                     window.localStorage.setItem('user',val.email );
                     window.localStorage.setItem('login',true);
                     window.localStorage.setItem('role',"user");
                     window.localStorage.setItem('mobile',recipe.mobile);
                     context.setLogin(true)
                                        
                }
                else if(val.email==="princevinay404@gmail.com" && val.pass === "Aa@12345"){
                    context.setLogin(true)
                    window.localStorage.setItem('user',val.email );
                    window.localStorage.setItem('login',true);
                    window.localStorage.setItem('role',"admin");
                    window.localStorage.setItem('mobile',9986565452);
                }
                else{
                    setGenErr(true)
                }

            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }
    const classes = useStyles();
    function StyledRadio(props) {
        const classes = useStyles();

        return (
            <Radio
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
                {...props}
            />
        );
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                autoComplete="email"
                            />
                            {emailErr ? <p style={{ color: 'red', fontSize: '12px' }}>Invalid!. Email</p> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="passwod"
                                type="password"
                                name="pass"
                                onChange={(e) => handleChange(e)}
                                autoComplete="email"
                            />
                            {passErr ? <p style={{ color: 'red', fontSize: '12px' }}>Password contain minimum 8 character and it Contain atleast 1 Uppercase, 1 Lowercase,1 special character, 1 Number</p> : null}
                            {genErr ? <p style={{ color: 'red', fontSize: '12px' }}>Inavlid! Email or Password</p> : null}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign in
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => props.history.push("/createaccount")}>
                                don't have an account? Sign Up
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
