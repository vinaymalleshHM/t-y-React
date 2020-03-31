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
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import Axios from 'axios';
import { Input } from '@material-ui/core';
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
        display: 'flex',
        flexWrap: 'wrap',
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


const passwordRegex = RegExp(
    /^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
);
const genderRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default function LoginForm(props) {
    const context = useContext(UserContext)
    const state = {
        email: null,
        password: null,
        formErrors: {
            email: "",
            password: ""
        }
    };

    const [stateval, setStateVal] = useState(state)
    const [genErr, setGenErr] = useState(false)
    const [pass, setPass] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        if (formValid(stateval)) {
            console.log(stateval.email)
            console.log(stateval.password)
            getAllAccount()
        } else {
            console.log("can't login");
            if (stateval.password !== null && stateval.email !== null) {
            }
            else {
                let formErrors = { ...stateval.formErrors };
                if (stateval.email === null) {
                    formErrors.email = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.password === null) {
                    formErrors.password = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
            }
        }
    };

    const handleChange = e => {
        e.preventDefault();

        const { name, value } = e.target;

        let formErrors = { ...stateval.formErrors };
        switch (name) {
            case "email": if (value !== "") {
                formErrors.email = "";
                if (value.match(genderRegex)) {
                    formErrors.email = "";
                }
                else {
                    formErrors.email = "invalid email address"
                }
            }
            else {
                formErrors.email = "field can't be blank";
            }
                break;
            case "password": if (value !== "") {
                formErrors.password = "";
                if (value.length > 5) {
                    formErrors.password = "";
                    if (value.length < 10) {
                        formErrors.password = "";
                        if (value.match(passwordRegex)) {
                            formErrors.password = "";
                        }
                        else {
                            formErrors.password = "password should be contain minium 1 lowercase,1 uppercase ans 1 expression"
                        }
                    }
                    else {
                        formErrors.password = "password max length is 10 characters";
                    }
                }
                else {
                    formErrors.password = "minimum 6 characaters required"
                }

            }
            else {
                formErrors.password = "field can't be blank"
            }
                break;
            default:
                break;
        }

        if (name === "password") {
            if (value.length < 11) {
                setStateVal({ ...stateval, formErrors, [name]: value });
            }
        }
        else {
            setStateVal({ ...stateval, formErrors, [name]: value });

        }
    };

    const showPass = () => {
        setPass(!pass)
    }
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const getAllAccount = () => {
        const url = 'https://react-medi.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
            for (const key in response.data) {
                let recipe = response.data[key]
                if (recipe.email === stateval.email && recipe.pass === stateval.password) {
                    console.log("email is ok")
                    window.localStorage.setItem('user', stateval.email);
                    window.localStorage.setItem('login', true);
                    window.localStorage.setItem('role', "user");
                    window.localStorage.setItem('mobile', recipe.mobile);
                    context.setLogin(true)
                    props.history.push("/")
                }
                else if (stateval.email === "princevinay404@gmail.com" && stateval.password === "Aa@12345") {
                    context.setLogin(true)
                    window.localStorage.setItem('user', stateval.email);
                    window.localStorage.setItem('login', true);
                    window.localStorage.setItem('role', "admin");
                    window.localStorage.setItem('mobile', 9986565452);
                    props.history.push("/")
                }
                else {
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
        <>
            <CssBaseline />
            <div className={classes.paper}>
                <div className="card card-body col-md-6 mt-3">
                    <div className="offset-5">
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            <h5>Signin</h5>
                        </Typography>
                    </div>
                    {genErr ? <p style={{ color: 'red', fontSize: '12px' }} className="offset-3"><h4>Inavlid! Email or Password</h4></p> : null}

                    <div className="col-md-8 offset-2">
                        <form className={classes.form} onSubmit={handleSubmit} noValidate>
                            <Grid container spacing={2}>
                                {/* <Grid spacing={2}> */}
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />
                                    {stateval.formErrors.email.length > 0 && (
                                        <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.email}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        type={pass ? "text" : "password"}
                                        fullWidth
                                        label="password"
                                        name="password"
                                        value={stateval.password}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start"
                                                aria-label="toggle password visibility"
                                                onClick={showPass}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                   {pass? <Visibility /> : <VisibilityOff />}
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {stateval.formErrors.password.length > 0 && (
                                        <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.password}</span>
                                    )}
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
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </>
    );
}
