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
const passwordRegex = RegExp(
  /^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const usernameRegex = RegExp(
  /^[a-zA-Z ]*$/
);
const genderRegex = RegExp(
  // /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const mobileRegex = RegExp(
  // /^[0-9]{10}$/
  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

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


export default function Home(props) {
  const state = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    conpassword: null,
    gender: null,
    mobile: null,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conpassword: "",
      gender: "",
      mobile: "",
    }
  };

  const [stateval, setStateVal] = useState(state)

  const handleSubmit = e => {
    e.preventDefault();

    if (formValid(stateval)) {
      saveData()
    } else {
      console.log("can't submit");
      if (stateval.firstName !== null && stateval.lasttName !== null && stateval.password !== null &&
        stateval.conpassword !== null && stateval.gender !== null
        && stateval.email !== null && stateval.mobile !== null) {
      }
      else {
        let formErrors = { ...stateval.formErrors };
        if (stateval.firstName === null) {
          formErrors.firstName = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.firstName === null) {
          formErrors.lastName = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.email === null) {
          formErrors.email = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.password === null) {
          formErrors.password = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.conpassword === null) {
          formErrors.conpassword = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.mobile === null) {
          formErrors.mobile = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
        if (stateval.gender === null) {
          formErrors.gender = "field is required"
          setStateVal({ ...stateval, formErrors });
        }
      }
    }
  };
  const saveData = () => {
    const formData = {
      firstName: stateval.firstName,
      lastName: stateval.lastName,
      email: stateval.email,
      password: stateval.password,
      gender: stateval.gender,
      mobile: stateval.mobile,
    }

    const url = 'https://react-medi.firebaseio.com/createaccounts.json'
    Axios.post(url, formData).then((response) => {
      console.log("Success ", response)
      if (response.status === 200) {

        // props.history.push('/login')
      }
    }).catch((err) => {
      console.log("Error ", err)

    })

  }
  const handleChange = e => {
    const { name, value } = e.target;

    let formErrors = { ...stateval.formErrors };
    console.log(value)
    switch (name) {
      case "firstName": if (value !== "") {
        formErrors.firstName = "";
        if (value.match(usernameRegex)) {
          formErrors.firstName = "";
          if (value.length > 2) {
            formErrors.firstName = "";
            if (value.length < 25) {
              formErrors.firstName = "";
            }
            else {
              formErrors.firstName = "name max length is 100 char";
            }
          }
          else {
            formErrors.firstName = "minimum 3 characaters required"
          }
        }
        else {
          formErrors.firstName = "should be contain character only "
        }
      }
      else {
        formErrors.firstName = "field can't be blank"
      }
        break;
      case "lastName": if (value !== "") {
        formErrors.lastName = "";
        if (value.match(usernameRegex)) {
          formErrors.lastName = "";
          if (value.length > 1) {
            formErrors.lastName = "";
            if (value.length < 25) {
              formErrors.lastName = "";
            }
            else {
              formErrors.lastName = "name max length is 100 char";
            }
          }
          else {
            formErrors.lastName = "minimum 2 characaters required"
          }
        }
        else {
          formErrors.lastName = "should be contain character only "
        }
      }
      else {
        formErrors.lastName = "field can't be blank"
      }
        break;
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
      case "conpassword": if (value !== "") {
        formErrors.conpassword = "";
        if (value === stateval.password) {
          formErrors.conpassword = "";
        }
        else {
          formErrors.conpassword = "password shoould match above password";
        }
      }
      else {
        formErrors.conpassword = "field can't be blank";
      }
        break;
      case "mobile": if (value !== "") {
        formErrors.mobile = "";
        if(!value.match(usernameRegex)){
          formErrors.mobile = "";
        if (value.match(mobileRegex)) {
          formErrors.mobile = "";
         
        }
        else {
          formErrors.mobile = "maximum 10 digit required";
        }
      }
      else{
        formErrors.mobile = "it should containe Numbers only";
      }
    }
      else {
        formErrors.mobile = "field can't be blank";
      }
        break;
      case "gender": if (value !== "") {
        formErrors.gender = "";
      }
      else {
        formErrors.gender = "please select";
      }
        break;
      default:
        break;
    }

    // setStateVal({ ...stateval, formErrors, [name]: value });
    if (name === "mobile") {
      if (value.length < 11) {
        setStateVal({ ...stateval, formErrors, [name]: value });
      }

    }
    else if(name === "password"){
      if (value.length < 11) {
        setStateVal({ ...stateval, formErrors, [name]: value });
      }
    }
    else{
      setStateVal({ ...stateval, formErrors, [name]: value });

    }
  };




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
                    name="firstName"
                    noValidate
                    onChange={handleChange}
                    autoFocus
                  />
                  {stateval.formErrors.firstName.length > 0 && (
                    <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.firstName}</span>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    noValidate
                    onChange={handleChange}
                    autoComplete="lname"
                  />
                  {stateval.formErrors.lastName.length > 0 && (
                    <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.lastName}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    noValidate
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
                    fullWidth
                    label="passwod"
                    type="password"
                    name="password"
                    value={stateval.password}
                    noValidate
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {stateval.formErrors.password.length > 0 && (
                    <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.password}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="confirm-passwod"
                    type="password"
                    name="conpassword"
                    noValidate
                    onChange={handleChange}
                    autoComplete="password"
                  />
                  {stateval.formErrors.conpassword.length > 0 && (
                    <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.conpassword}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Mobile No"
                    maxLength="10"
                    value={stateval.mobile}
                    name="mobile"
                    noValidate
                    onChange={handleChange}
                    autoComplete="mobile"
                  />
                  {(stateval.formErrors.mobile.length > 0) && (
                    <p style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.mobile}</p>
                  )}
                </Grid>
                <Grid xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender"
                      row>
                      <FormControlLabel value="female" control={<StyledRadio />} noValidate
                        onChange={handleChange} label="Female" />
                      <FormControlLabel value="male" control={<StyledRadio />} noValidate
                        onChange={handleChange} label="Male" />
                      <FormControlLabel value="other" control={<StyledRadio />} noValidate
                        onChange={handleChange} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {stateval.formErrors.gender.length > 0 && (
                  <span style={{ color: "red", fontSize: "15px" }}>{stateval.formErrors.gender}</span>
                )}

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