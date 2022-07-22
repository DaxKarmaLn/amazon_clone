import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";
import styled from 'styled-components';
import { createTheme, ThemeProvider } from "@mui/material";
import './styles.css';

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
};
theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
};
theme.typography.h6 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.7rem',
  },  
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
};
theme.typography.body2 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.7rem',
    },
    [theme.breakpoints.up('sm')]: {
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

export default function BusinessAccount() {

    // regular expression for email
    var emailRegex = /^\S+@\S+\.\S+$/;

    // hooks for data insertion
    const [hover, setHover] = useState(false);
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');

    // hooks for validation
    const [formValidation, setFormValidation] = useState(null);

    // check validation of every fields
    const validateForm = () => {
        let error = false;
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
        if(companyName === '') {
            error = {
                id: 'businessName',
                message: 'business name is required.',
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
            email,
            companyName,
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

    // mouse over effects functions
    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    
    return(
        <>
            <ThemeProvider theme={theme}>
            <Grid>
                <Typography sx={{ textAlign: "center" }} variant="h3" >Amazon.in</Typography>
                <Grid item container
                    component="form"
                    sx={{
                        backgroundColor: "white",
                        '& .MuiTextField-root': { m: 1, width: {  xl: "18vw", lg: "22vw", md: "30vw", sm: "45vw", xs: "50vw" } },
                        border: "1px solid #ddd",
                        textAlign: "left",
                        width : { xl: "50vw", lg: "60vw", md: "70vw", sm: "100vw" },
                        margin: "auto", 
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid item sm={6} xs={12} sx={{ p: "2vh" }}>
                        <Typography variant="h5">Let us create your free Amazon Business account</Typography>
                        <Typography variant="h6"><i>Enter the work email you'd like to use for your business account.</i></Typography>
                        <TextField
                            id="email"
                            label="Enter email address"
                            variant="outlined"
                            type="text"
                            required
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            helperText={formValidation && formValidation.id === "email" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                        />
                        <TextField
                            id="businessName"
                            label="Enter business name"
                            variant="outlined"
                            type="text"
                            required
                            onChange={(e) => setCompanyName(e.target.value)}
                            helperText={formValidation && formValidation.id === "businessName" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                        />
                        <TextField
                            id="password"
                            label="Enter password"
                            variant="outlined"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            helperText={formValidation && formValidation.id === "password" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                        />

                        <StyledButton 
                            sx={{ color: "#111", backgroundColor: "#fbc93c", width: "90%", my: "2vh", mr: "2vh", border: "1px solid #fbc93c" }}
                            onClick={postData}
                        >
                            Get Started 
                        </StyledButton>
                        <Typography variant="h6" >
                            <i style={{ color: "#646c75" }}>
                                Make sure that you have information about your organization to help us verify your business account faster.
                            </i>
                        </Typography>

                        <Link
                            style={{ color: "#0066c0"}}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            // href="/businessAccount"
                        > Why is verification needed? </Link>
                        {
                            hover && 
                            <Typography sx={{ maxWidth: "30vh" }}>
                                To ensure that the identity of yours and other businesses remains secure, 
                                we always confirm new business registrations.
                            </Typography>
                        }
                    </Grid>
                    
                    <Grid item sx={{ backgroundColor: "#021f3d", color: "#ffffff", p: "2vh 2vh 0vh 2vh" }} sm={6} xs={12} >
                        <Typography variant="h5" sx={{ mb: "2vw"}}>Reshape buying for your organization</Typography>

                        <Typography variant="h6">GST Invoice & Bulk Discounts</Typography>
                        <Typography variant="body2" sx={{ mb: "1vw"}}>Save up to 28% more with GST input credit and avail discounts on multi-unit purchases.</Typography>

                        <Typography variant="h6">Business Analytics</Typography>
                        <Typography variant="body2" sx={{ mb: "1vw"}}>Track and monitor spending by your organization with dynamic charts and data tables.</Typography>

                        <Typography variant="h6">Secure Your Account</Typography>
                        <Typography variant="body2" sx={{ mb: "1vw"}}>Add more colleagues to your account for making business purchases instead of sharing your login credentials.</Typography>

                        <img src="https://m.media-amazon.com/images/I/416LUsi8c6L.svg" alt="buildings" />

                        <Typography sx={{ backgroundColor: "#0d2c49", py: "1vh" }} >
                            <Link style={{ textDecoration: "none", color: "#ffffff"}} >
                                Learn more about Amazon Business
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* <Typography className='bottom'>
                    <Typography>
                        Need help? Contact
                        <Link> business customer service. </Link>
                        Read our
                        <Link> conditions of use </Link>
                        and
                        <Link> Privacy notice.</Link>
                    </Typography>
                    <Typography>
                        © 1996–2022, Amazon.com Inc. or its affiliates
                    </Typography>
                </Typography> */}

                <Box className='bottom'>
                    <Typography>
                        Need help? Contact
                        <Link> business customer service. </Link>
                        Read our
                        <Link> conditions of use </Link>
                        and
                        <Link> Privacy notice.</Link>
                    </Typography>
                    <Typography>
                        © 1996–2022, Amazon.com Inc. or its affiliates
                    </Typography>
                </Box>


            </Grid>
            </ThemeProvider>
        </>
    )
}