import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import Axios from 'axios';

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
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    }
}));

export default function SignUp(props) {
    const userData = {
        fName: '',
        lName: '',
        email: '',
        mobile: '',
        gender: '',
        pass: '',
        conPass: ''
    }
    const [fNameErr, setFNameErr] = useState(false)
    const [lNameErr, setLNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [mobileErr, setMobileErr] = useState(false)
    const [genderErr, setGenderErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [conPassErr, setConPassErr] = useState(false)

    const [val, setval] = useState(userData)


    const handleChange = (e) => {
        setval({
            ...val,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validForm();
        if (val.fName !== '' && val.lName !== '' && val.pass !== '' && val.gender !== '' && val.email !== '' && val.conPass !== '') {
            validForm();
            if (fullControl()) {
                saveData()
            }
        }

    }
    const validForm = () => {

        if (val.fName.trim().match(/^[a-zA-Z ]*$/) && val.fName !== '') {
            setFNameErr(false)
        }
        else {
            setFNameErr(true)
        }
        if (val.lName.trim().match(/^[a-zA-Z ]*$/) && val.lName !== '') {
            setLNameErr(false)
        }
        else {
            setLNameErr(true)
        }

        if (val.email.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
            setEmailErr(false)
        }
        else {
            setEmailErr(true)
        }

        if (val.mobile.trim().match(/^[0-9]{10}$/)) {
            setMobileErr(false)
        }
        else {
            setMobileErr(true)
        }

        if (val.pass.match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) && val.pass !== "") {
            setPassErr(false)
        }
        else {
            setPassErr(true)
        }

        if (val.pass === val.conPass && val.conPass !== '') {
            setConPassErr(false)
        }
        else {
            setConPassErr(true)
        }
        if (val.gender !== '') {
            setGenderErr(false)
        }
        else {
            setGenderErr(true)
        }

    }

    const fullControl = () => {
        // debugger
        validForm();

        console.log(mobileErr)

        if (fNameErr !== true && lNameErr !== true && emailErr !== true && mobileErr !== true && genderErr !== true && passErr !== true && conPassErr !== true) {
            // validForm();
            return true
        }
        else {
            return false
        }
    }

    const saveData = () => {
        const formData = val

        const url = 'https://react-medi.firebaseio.com/createaccounts.json'
        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {

                props.history.push('/login')
            }
        }).catch((err) => {
            console.log("Error ", err)

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
                            <h5>Signup</h5>
                        </Typography>
                    </div>
                    <div className="col-md-8 offset-2">
                        <form className={classes.form} onSubmit={handleSubmit} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="First Name"
                                        name="fName"
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    {fNameErr ? <p style={{ color: 'red', fontSize: '12px' }}>Username Should be Characters</p> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Last Name"
                                        name="lName"
                                        onChange={(e) => handleChange(e)}
                                        autoComplete="lname"
                                    />
                                    {lNameErr ? <p style={{ color: 'red', fontSize: '12px' }}>Username Should be Characters</p> : null}
                                </Grid>


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
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="confirm-passwod"
                                        type="password"
                                        name="conPass"
                                        onChange={(e) => handleChange(e)}
                                        autoComplete="password"
                                    />
                                    {conPassErr ? <p style={{ color: 'red', fontSize: '12px' }}>password must match with above password</p> : null}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Mobile No"
                                        name="mobile"
                                        maxlength="10"
                                        onChange={(e) => handleChange(e)}
                                        autoComplete="mobile"
                                    />
                                    {mobileErr ? <p style={{ color: 'red', fontSize: '12px' }}>Enter valid Mobile Number</p> : null}
                                </Grid>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender" row>
                                        <FormControlLabel value="female" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Female" />
                                        <FormControlLabel value="male" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Male" />
                                        <FormControlLabel value="other" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Other" />
                                    </RadioGroup>
                                    {genderErr ? <p style={{ color: 'red', fontSize: '12px' }}>Select Gender</p> : null}
                                </FormControl>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I Accept the Conditions"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Sign Up
                    </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={() => props.history.push("/login")}>
                                        Already have an account? Sign in
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