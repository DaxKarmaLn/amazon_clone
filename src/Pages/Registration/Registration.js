import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Box, Button, Typography, Link, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1rem',
  },
};

// customized button
const StyledButton = styled(Button) `
    &:hover {
        color: #111 !important;
        background-color: #fbc93c !important;
        border: 1px solid #f95f47;
    }
`

export default function Registration() {

    // regular expression for email
    var emailRegex = /^\S+@\S+\.\S+$/;

    // hooks for data insertion
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hooks for validation
    const [formValidation, setFormValidation] = useState(null);
    
    // check validation of every fields
    const validateForm = () => {
        let error = false;
        if(firstName === '') {
            error = {
                id: 'name',
                message: 'name is required.',
            };
            return error;
        }
        if(phoneNumber === '') {
            error = {
                id: 'phone_number',
                message: 'phone number is required.',
            };
            return error;
        }
        if(email === '') {
            error = {
                id: 'email',
                message: 'email is required.',
            }
            return error;
        }
        if(!email.match(emailRegex)) {
            error = {
                id: 'email',
                message: 'please enter valid email.'
            }
            return error;
        }
        if(password === '') {
            error = {
                id: 'password',
                message: 'password is required.',
            }
            return error;
        }
        return error;
    }

    // data insertion
    const postData = () => {
        setFormValidation(null);

        // check data is validated or not
        let error = validateForm();
        if(error) {
            setFormValidation(error);
            return;
        }
        
        // data insertion using post method
        axios.post(`http://localhost:3001/api/users`, {
            firstName,
            phoneNumber,
            email,
            password
        })
        .then((response) => {
            console.log(response);
            if((response.data.message).trim() === "User created successfully.") {
                window.location = "http://localhost:3000/login";
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <>
        <ThemeProvider theme={theme}>
            <Box>
                <Typography variant="h2" sx={{ textAlign: "center" }}> Amazon.in </Typography>
                <Box
                    component="form"
                    sx={{
                        backgroundColor: "white",
                        '& .MuiTextField-root': { m: 1, width: { xl: "18vw", lg: "20vw", md: "27vw", sm: "42vw", xs: "47vw" } },
                        border: "1px solid #ddd",
                        textAlign: "left",
                        width : { xl: "18vw", lg: "22vw", md: "30vw", sm: "45vw", xs: "50vw" },
                        margin: "auto",
                        padding: "2vw"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5"> Create Account </Typography>
                    <TextField 
                        id="name"
                        label="Your name"
                        variant="outlined"
                        type="text"
                        required
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                        helperText={formValidation && formValidation.id === "name" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                    />
                    <TextField  
                        id="phone_number"
                        label="Mobile Number"
                        variant="outlined"
                        type="number"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        helperText={formValidation && formValidation.id === "phone_number" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                    />
                    <TextField 
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={formValidation && formValidation.id === "email" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                    />
                    <TextField 
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={formValidation && formValidation.id === "password" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                    />

                    <Typography variant="h3"> Passwords must be at lease 6 characters. </Typography>
                
                    <Typography variant="h3" >
                        We will send you text to verify your phone. <br />
                        Message and data rates may apply.
                    </Typography>
                
                    <StyledButton 
                        sx={{ color: "#111", backgroundColor: "#fbc93c", width: "100%", my: "2vh", border: "1px solid #fbc93c" }}
                        onClick={postData}
                    >
                        Continue
                    </StyledButton>
                
                    <hr width="80%" />
                    <Typography variant="h3" >
                        Already have an account?
                        <Link sx={{ textDecoration: "none" }} href="/login" >Sign in</Link>
                    </Typography>
                    <Typography variant="h3" >
                        Buying for work?
                        <Link sx={{ textDecoration: "none" }} href="/businessAccount"> Create a free business account </Link>
                    </Typography>
                </Box>

                <Box sx={{ textAlign: "center", fontSize: "1.5vh", mt: "2vw" }}>
                    <Link sx={{ textDecoration: "none" }} >Condition of Use &nbsp;|&nbsp; </Link>
                    <Link sx={{ textDecoration: "none" }} > Privacy Notice &nbsp;|&nbsp; </Link>
                    <Link sx={{ textDecoration: "none" }} >Help</Link>
                    <Typography sx={{ fontSize: "1.5vh" }}> © 1996–2022, Amazon.com, Inc. or its affiliates </Typography>
                </Box>

            </Box>
        </ThemeProvider>
        </>
    )
}