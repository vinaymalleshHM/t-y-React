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


export default function RegisterForm(props) {

    const userData = {
        // fName: "",
        // lName: "",
        // emailid: "",
        // mobileno: "",
        // password: "",
        // conPassword: "",
        // gender: "",
        fields: {},
        errors: {}
    }
    const [values, setValues] = useState(userData)

    const handleChange = e => {
        let fields = values.fields;
        // console.log("values.fields", values.fields)
        fields[e.target.name] = e.target.value;
        setValues({
            // fields
            // ...values,
            // [e.target.name]: e.target.value,
            fields
        });

    }

    const submituserRegistrationForm = e => {
        e.preventDefault();
        if (validateForm()) {
            let fields = {};
            fields["username"] = "";
            // fields["lName"] = "";
            // fields["emailid"] = "";
            // fields["mobileno"] = "";
            // fields["password"] = "";
            // fields["conPassword"] = "";
            // fields["gender"] = "";
            setValues({ fields: fields });
            //   alert("Form submitted");
            console.log("Form submitted")
        }
        else {
            console.log("Find error")
        }

    }

    const validateForm = () => {

        let fields = values.fields;
        // let errors = {
        //     fName: "",
        //     lName: "",
        //     emailid: "",
        //     mobileno: "",
        //     password: "",
        //     conPassword: "",
        //     gender: "",
        // };
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
        // if (!fields["lName"]) {
        //     formIsValid = false;
        //     errors.lName = "*Please enter your username.";
        // }

        // if (typeof fields["lName"] !== "undefined") {
        //     if (!fields["lName"].match(/^[a-zA-Z ]*$/)) {
        //         formIsValid = false;
        //         errors.lName = "*Please enter alphabet characters only.";
        //     }
        // }

        // if (!fields["emailid"]) {
        //     formIsValid = false;
        //     errors.emailid = "*Please enter your email-ID.";
        // }

        // if (typeof fields["emailid"] !== "undefined") {
        //     //regular expression for email validation
        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(fields["emailid"])) {
        //         formIsValid = false;
        //         errors.emailid = "*Please enter valid email-ID.";
        //     }
        // }

        // if (!fields["mobileno"]) {
        //     formIsValid = false;
        //     errors.mobileno = "*Please enter your mobile no.";
        // }

        // if (typeof fields["mobileno"] !== "undefined") {
        //     if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        //         formIsValid = false;
        //         errors.mobileno = "*Please enter valid mobile no.";
        //     }
        // }

        // if (!fields["password"]) {
        //     formIsValid = false;
        //     errors.password = "*Please enter your password.";
        // }

        // if (typeof fields["password"] !== "undefined") {
        //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //         formIsValid = false;
        //         errors.password = "*Please enter secure and strong password.";
        //     }
        // }
        // if (!fields["conPassword"]) {
        //     formIsValid = false;
        //     errors.conPassword = "*Please enter your password.";
        // }

        // if (typeof fields["conPassword"] !== "undefined") {
        //     if (fields["conPassword"] !== fields["password"]) {
        //         formIsValid = false;
        //         errors.conPassword = "*Please match the password.";
        //     }
        // }
        // if (!fields["gender"]) {
        //     formIsValid = false;
        //     errors.gender = "*Please enter your gender.";
        // }

        // if (typeof fields["gender"] === "undefined") {
        //     formIsValid = false;
        // }

        setValues({
            errors: errors
        });
        return formIsValid;


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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
        </Typography>
                    <form className={classes.form} onSubmit={submituserRegistrationForm} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="First Name"
                                    // name="fName"
                                    // value={values.fName}
                                    name="username" 
                                    value={values.fields.username}
                                    onChange={(e) => handleChange(e)}
                                    autoFocus
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.fName}</div>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lName"
                                    // value={values.lName}
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.lName}</div>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="emailid"
                                    // value={values.emailid}
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.emailid}</div>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="passwod"
                                    type="password"
                                    name="password"
                                    // value={values.password}
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.password}</div>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="confirm-passwod"
                                    type="password"
                                    name="conPassword"
                                    // value={values.conPassword}
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="password"
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.conPassword}</div>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Mobile No"
                                    name="mobileno"
                                    // value={values.mobileno}
                                    maxLength="10"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="mobile"
                                />
                            </Grid>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.mobileno}</div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender"
                                    // value={values.gender} 
                                    row>
                                    <FormControlLabel value="female" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Female" />
                                    <FormControlLabel value="male" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Male" />
                                    <FormControlLabel value="other" control={<StyledRadio />} onClick={(e) => handleChange(e)} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <div style={{ color: 'red', fontSize: '15px' }}>{values.errors.gender}</div>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I Accept the Conditions"
                                />
                            </Grid> */}
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
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </>
    )
}



//   *************** ++++++++  =================  ---------------------


// import React, { Component } from 'react'

// export default class RegisterForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//           fields: {},
//           errors: {}
//         }
  
//         this.handleChange = this.handleChange.bind(this);
//         this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
//       };
  
//       handleChange(e) {
//         let fields = this.state.fields;
//         fields[e.target.name] = e.target.value;
//         this.setState({
//           fields
//         });
  
//       }
  
//       submituserRegistrationForm(e) {
//         e.preventDefault();
//         if (this.validateForm()) {
//             let fields = {};
//             fields["username"] = "";
//             fields["emailid"] = "";
//             fields["mobileno"] = "";
//             fields["password"] = "";
//             this.setState({fields:fields});
//             alert("Form submitted");
//         }
  
//       }
  
//       validateForm() {
  
//         let fields = this.state.fields;
//         let errors = {};
//         let formIsValid = true;
  
//         if (!fields["username"]) {
//           formIsValid = false;
//           errors["username"] = "*Please enter your username.";
//         }
  
//         if (typeof fields["username"] !== "undefined") {
//           if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
//             formIsValid = false;
//             errors["username"] = "*Please enter alphabet characters only.";
//           }
//         }
  
//         if (!fields["emailid"]) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter your email-ID.";
//         }
  
//         if (typeof fields["emailid"] !== "undefined") {
//           //regular expression for email validation
//           var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//           if (!pattern.test(fields["emailid"])) {
//             formIsValid = false;
//             errors["emailid"] = "*Please enter valid email-ID.";
//           }
//         }
  
//         if (!fields["mobileno"]) {
//           formIsValid = false;
//           errors["mobileno"] = "*Please enter your mobile no.";
//         }
  
//         if (typeof fields["mobileno"] !== "undefined") {
//           if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
//             formIsValid = false;
//             errors["mobileno"] = "*Please enter valid mobile no.";
//           }
//         }
  
//         if (!fields["password"]) {
//           formIsValid = false;
//           errors["password"] = "*Please enter your password.";
//         }
  
//         if (typeof fields["password"] !== "undefined") {
//           if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//             formIsValid = false;
//             errors["password"] = "*Please enter secure and strong password.";
//           }
//         }
  
//         this.setState({
//           errors: errors
//         });
//         return formIsValid;
  
  
//       }
  
  
  
//     render() {
//       return (
//       <div id="main-registration-container">
//        <div id="register">
//           <h3>Registration page</h3>
//           <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
//           <label>Name</label>
//           <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
//           <div className="errorMsg">{this.state.errors.username}</div>
//           <label>Email ID:</label>
//           <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
//           <div className="errorMsg">{this.state.errors.emailid}</div>
//           <label>Mobile No:</label>
//           <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
//           <div className="errorMsg">{this.state.errors.mobileno}</div>
//           <label>Password</label>
//           <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
//           <div className="errorMsg">{this.state.errors.password}</div>
//           <input type="submit" className="button"  value="Register"/>
//           </form>
//       </div>
//   </div>
  
//         );
//     }
  
  
//   }
  

