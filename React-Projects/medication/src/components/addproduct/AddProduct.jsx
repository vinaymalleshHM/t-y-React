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

export default function SignUp(props) {
    const userData = {
        pName: '',
        company: '',
        price: '',
        qty: '',
        proImg: '',
        description: '',
        medicineType: ''
    }
    const [pNameErr, setPNameErr] = useState(false)
    const [companyErr, setCompanyErr] = useState(false)
    const [priceErr, setPriceErr] = useState(false)
    const [qtyErr, setQtyErr] = useState(false)
    const [proImgErr, setProImgErr] = useState(false)
    const [mediErr, setMedediErr] = useState(false)
    const [descriptionErr, setDescriptionErr] = useState(false)
    const [open, setOpen] = React.useState(false);

    const [val, setval] = useState(userData)


    const handleChange = (e) => {
        setval({
            ...val,
            [e.target.name]: e.target.value
        })
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        // debugger
        validForm();
        if (val.pName !== '' && val.company !== '' && val.price !== '' && val.qty !== '' && val.proImg !== '' && val.description !== '') {
            validForm();
            if (fullControl()) {
                saveData()
            }
        }

    }
    const validForm = () => {

        if (val.pName.trim().match(/^[a-zA-Z ]*$/) && val.pName !== '') {
            setPNameErr(false)
        }
        else {
            setPNameErr(true)
        }
        if (val.company.trim().match(/^[a-zA-Z ]*$/) && val.company !== '') {
            setCompanyErr(false)
        }
        else {
            setCompanyErr(true)
        }
        if (val.medicineType.trim() && val.medicineType !== '') {
            setMedediErr(false)
        }
        else {
            setMedediErr(true)
        }
        if (val.description.trim() && val.description !== '') {
            setDescriptionErr(false)
        }
        else {
            setDescriptionErr(true)
        }

        if (val.price.trim().match(/^[0-9]/)) {
            setPriceErr(false)
        }
        else {
            setPriceErr(true)
        }
        if (val.qty.trim().match(/^[0-9]/)) {
            setQtyErr(false)
        }
        else {
            setQtyErr(true)
        }

        if (val.proImg !== "") {
            setProImgErr(false)
        }
        else {
            setProImgErr(true)
        }
    }

    const fullControl = () => {
        // validForm();
        if (pNameErr !== true && companyErr !== true && priceErr !== true && qtyErr !== true && proImgErr !== true && descriptionErr !== true) {
            return true
        }
        else {
            return false
        }
    }
    const saveData = () => {
        const formData = val

        const url = 'https://react-medi.firebaseio.com/addproducts.json'
        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {

                setval({
                    pName: '',
                    company: '',
                    price: '',
                    qty: '',
                    proImg: '',
                    description: '',
                    medicineType: ''
                })
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
                
                <Typography component="h1" variant="h5">
                    <h1 className="text-center">Add Product</h1>
        </Typography>
        <Grid md={12}>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                variant="outlined"
                                required
                                fullWidth
                                label="Product Name"
                                name="pName"
                                value={val.pName}
                                onChange={handleChange}
                                autoFocus
                            />
                            {pNameErr ? <p style={{ color: 'red', fontSize: '12px' }}>product name Should be Characters</p> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="company Name"
                                name="company"
                                value={val.company}
                                onChange={(e) => handleChange(e)}
                                autoComplete="company"
                            />
                            {companyErr ? <p style={{ color: 'red', fontSize: '12px' }}>companyname Should be Characters</p> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Image Address"
                                name="proImg"
                                value={val.proImg}
                                onChange={(e) => handleChange(e)}
                                autoComplete="company"
                            />
                            {companyErr ? <p style={{ color: 'red', fontSize: '12px' }}> enter proper image address</p> : null}
                        </Grid>
                                 
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="price"
                                name="price"
                                value={val.price}
                                onChange={(e) => handleChange(e)}
                                autoComplete="price"
                            />
                            {priceErr ? <p style={{ color: 'red', fontSize: '12px' }}>enter no only</p> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Quantity"
                                name="qty"
                                value={val.qty}
                                onChange={(e) => handleChange(e)}
                                autoComplete="Quantity"
                            />
                            {qtyErr ? <p style={{ color: 'red', fontSize: '12px' }}>enter no only</p> : null}
                        </Grid> 
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">medicine type</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={val.medicineType}
                                name="medicineType"
                                onChange={(e) => handleChange(e)}>
                                <MenuItem value="tanic">tanic</MenuItem>
                                <MenuItem value="tablet">tablet</MenuItem>
                                <MenuItem value="powder">powder</MenuItem>
                            </Select>
                                {mediErr ? <p style={{ color: 'red', fontSize: '12px' }}>enter type of medicine</p> : null}
                        </FormControl>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="description"
                                name="description"
                                value={val.description}
                                onChange={(e) => handleChange(e)}
                                autoComplete="password"
                            />
                            {descriptionErr ? <p style={{ color: 'red', fontSize: '12px' }}>desc can't empty</p> : null}
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