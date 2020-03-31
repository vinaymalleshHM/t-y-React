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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const usernameRegex = RegExp(
    /^[a-zA-Z ]*$/
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

export default function AddProduct(props) {
    const state = {
        pName: null,
        company: null,
        price: null,
        qty: null,
        proImg: null,
        description: null,
        medicineType: null,
        formErrors: {
            pName: "",
            company: "",
            price: "",
            qty: "",
            proImg: "",
            description: "",
            medicineType: "",
        }
    };

    const [stateval, setStateVal] = useState(state)
    const [open, setOpen] = React.useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (formValid(stateval)) {
            saveData()
        } else {
            console.log("can't submit");
            if (stateval.pName !== null && stateval.company !== null && stateval.price !== null &&
                stateval.qty !== null && stateval.proImg !== null
                && stateval.description !== null && stateval.medicineType !== null) {
            }
            else {
                let formErrors = { ...stateval.formErrors };
                if (stateval.pName === null) {
                    formErrors.pName = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.company === null) {
                    formErrors.company = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.description === null) {
                    formErrors.description = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.price === null) {
                    formErrors.price = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.qty === null) {
                    formErrors.qty = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.medicineType === null) {
                    formErrors.medicineType = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.proImg === null) {
                    formErrors.proImg = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
            }
        }
    };
    const saveData = () => {
        const formData = {
            pName: stateval.pName,
            company: stateval.company,
            description: stateval.description,
            price: stateval.price,
            proImg: stateval.proImg,
            medicineType: stateval.medicineType,
        }

        const url = 'https://react-medi.firebaseio.com/addproducts.json'
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
            case "pName": if (value !== "") {
                formErrors.pName = "";
                if (value.match(usernameRegex)) {
                    formErrors.pName = "";
                    if (value.length > 1) {
                        formErrors.pName = "";
                        if (value.length < 150) {
                            formErrors.pName = "";
                        }
                        else {
                            formErrors.pName = "product name max length is 150 character";
                        }
                    }
                    else {
                        formErrors.pName = "minimum 2 characaters is required"
                    }
                }
                else {
                    formErrors.pName = "should be contain character only "
                }
            }
            else {
                formErrors.pName = "field can't be blank"
            }
                break;
            case "company": if (value !== "") {
                formErrors.company = "";
                if (value.match(usernameRegex)) {
                    formErrors.company = "";
                    if (value.length > 1) {
                        formErrors.company = "";
                        if (value.length < 25) {
                            formErrors.company = "";
                        }
                        else {
                            formErrors.company = "name max length is 25 char";
                        }
                    }
                    else {
                        formErrors.company = "minimum 2 characaters required"
                    }
                }
                else {
                    formErrors.company = "this field should be contain character only "
                }
            }
            else {
                formErrors.company = "field can't be blank"
            }
                break;
            case "description": if (value !== "") {
                formErrors.description = "";
                if (value.length < 150) {
                    formErrors.description = "";
                }
                else {
                    formErrors.description = "maximum characters is 150"
                }
            }
            else {
                formErrors.description = "field can't be blank";
            }
                break;
            case "price": if (value !== "") {
                formErrors.price = "";
                if (!value.match(usernameRegex)) {
                    formErrors.price = "";
                    // if (value.length < 10) {
                    //     formErrors.price = "";
                        if (value.match(/^[0-9]/) || value.match(/^[0-9](\.[0-9]+)?$/)) {
                            formErrors.price = "";
                        }
                        else {
                            formErrors.price = "enter valid price"
                        }
                    }
                    else {
                        formErrors.price = "please use numbers only";
                    }
                // }
                // else {
                //     formErrors.price = "minimum 6 characaters required"
                // }

            }
            else {
                formErrors.price = "please enter the price"
            }
                break;
            case "qty": if (value !== "") {
                formErrors.qty = "";
                if (value.match(/^[0-9]/)) {
                    formErrors.qty = "";
                    if (value.length <5 ) {
                    formErrors.qty = "";
                        if (!value.match(usernameRegex)) {
                    formErrors.qty = "";
                        }
                        else{
                    formErrors.qty = "use numbers";
                        }
                    }
                    else{
                    formErrors.qty = "maximum 4 numbers only";
                    }
                }
                else {
                    formErrors.qty = "please use numbers only";
                }
            }
            else {
                formErrors.qty = "please enter number of quantity";
            }
                break;
            case "medicineType": if (value !== "") {
                formErrors.medicineType = "";
            }
            else {
                formErrors.medicineType = "please select options";
            }
                break;
            case "proImg": if (value !== "") {
                formErrors.proImg = "";
                if (value.length<150) {
                formErrors.proImg = "";
                }
                else{
                formErrors.proImg = "maximumm number of character(150) is reached";
                }
            }
            else {
                formErrors.proImg = "please give image path";
            }
                break;
            default:
                break;
        }

        // if (name === "medicineType") {
        //     if (value.length < 11) {
        //         setStateVal({ ...stateval, formErrors, [name]: value });
        //     }

        // }
        // else if (name === "price") {
        //     if (value.length < 11) {
        //         setStateVal({ ...stateval, formErrors, [name]: value });
        //     }
        // }
        // else {
            setStateVal({ ...stateval, formErrors, [name]: value });

        // }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const medicine = [
        {
            value: 'tanic',
            label: 'tanic',
        },
        {
            value: 'powder',
            label: 'powder',
        },
        {
            value: 'tablet',
            label: 'tablet',
        }
    ];


    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <div className={classes.paper}>
                <div className="card card-body col-md-6 mt-3">

                    <Typography component="h1" variant="h5">
                        <h1 className="text-center">Add Product</h1>
                    </Typography>
                    <Grid md={8} className="offset-2">
                        <form className={classes.form} onSubmit={handleSubmit} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        autoComplete="fname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Product Name"
                                        name="pName"
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    {stateval.formErrors.pName.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.pName}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="company Name"
                                        name="company"
                                        onChange={handleChange}
                                        autoComplete="company"
                                    />
                                     {stateval.formErrors.company.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.company}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Image Address"
                                        name="proImg"
                                        onChange={handleChange}
                                        autoComplete="company"
                                    />
                                     {stateval.formErrors.proImg.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.proImg}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="price"
                                        name="price"
                                        onChange={handleChange}
                                        autoComplete="price"
                                    />
                                    {stateval.formErrors.price.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.price}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Quantity"
                                        name="qty"
                                        onChange={handleChange}
                                        autoComplete="Quantity"
                                    />
                                    {stateval.formErrors.qty.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.qty}</span>
                                    )}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="description"
                                        name="description"
                                        onChange={handleChange}
                                        autoComplete="price"
                                    />
                                    {stateval.formErrors.description.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.description}</span>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="medicine type"
                                        fullWidth
                                        value={stateval.medicineType}
                                        name="medicineType"
                                        onChange={handleChange}
                                        variant="outlined"
                                    >
                                        {medicine.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {stateval.formErrors.medicineType.length > 0 && (
                                        <span style={{ color: "red", fontSize: "20px" }}>{stateval.formErrors.medicineType}</span>
                                    )}
                                </Grid>
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
                                add product
                    </Button>
                        </form>
                    </Grid>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </>
    );
}