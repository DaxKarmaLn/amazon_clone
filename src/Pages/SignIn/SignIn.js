import * as React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import styled from 'styled-components';

// customized button
const StyledButton = styled(Button) `
    &:hover {
        color: #111 !important;
        background-color: #fbc93c !important;
        border: 1px solid #f95f47;
    }
`

export default function SignIn () {
    return(
        <>
            <Box sx={{ backgroundColor: "white", textAlign: "center", paddingY: "3vh" }}>
                <Typography> See personalized recommendations </Typography> 
            
                <Link href="/login" sx={{ textDecoration: "none" }}>
                    <StyledButton 
                        sx={{ color: "#111", backgroundColor: "#fbc93c", paddingX: "10vw", border: "1px solid #fbc93c" }}
                    >
                        Sign in
                    </StyledButton>
                </Link>
            
                <Typography>
                    new customer? 
                    <Link href="/registration"> Start here. </Link>
                </Typography>
            </Box>
        </>
    )
}
