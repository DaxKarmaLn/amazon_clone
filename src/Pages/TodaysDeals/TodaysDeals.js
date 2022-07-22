import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

const theme = createTheme();
theme.typography.h5 = {
    [theme.breakpoints.only('xs', 'sm')] : {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')] : {
        fontSize: '2rem',
    },
};
theme.typography.body1 = {
    [theme.breakpoints.only('xs')] : {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.up('sm')] : {
        fontSize: '1rem',
    },
};theme.typography.body2 = {
    [theme.breakpoints.only('xs')] : {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')] : {
        fontSize: '0.7rem',
    },
};

export default function TodaysDeals() { 
    // hooks for fetch data
    const [dealsData, setDealsData] = useState(null);
    // api for data fetching
    const url='http://localhost:3001/api/todays-deals?limit=1000';

    // fetch data using axios
    useEffect(() => {
        axios.get(url).then((response) => {
            setDealsData(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // if data is not available return null
    if(!dealsData) return null;

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <MenuBar />
        <Grid>
            <Typography variant="h5">Today's Deals</Typography>
            <Grid item container>
                {
                    dealsData.data.items.map( item => {
                        return(
                            <Grid item xs={6} sm={3} lg={2.4} sx={{ border: "1px solid #d4dbdb", padding: "2vw"}} key={item.id}>
                                <Card>
                                    <CardMedia
                                        sx={{ maxHeight: "20vh", objectFit: "contain" }}
                                        component="img"
                                        image={item.image}
                                        alt="deals"
                                    />
                                </Card>
                                <Box>
                                    <Typography variant='body2' sx={{ backgroundColor: "#d71a3c", color: "#ffffff", paddingY: "0.1vh", float: "left" }}>{item.discount}</Typography>
                                    <Typography variant='body2' sx={{ color: "#d71a3c", paddingY: "0.1vh" }}><b> &nbsp;&nbsp; Deal of the Day </b></Typography>
                                </Box>
                                <Typography variant='body1'>{item.description}</Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  )
}
