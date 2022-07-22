import React from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

// media queries for font size
const theme = createTheme();
theme.typography.body2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};
theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
};

export default function Fashion() {
    return (
        <>
        <Header />
        <MenuBar />
        <ThemeProvider theme={theme}>
            <Box>
                <Grid item container>
                    {/* fashion header start */}
                    <Grid item container xs={12} sx={{ backgroundColor: "#efefef", paddingY: "0.5vw", marginBottom: "0.5vw", textAlign: "center"}}>
                        <Grid item xs={2}>
                            <Typography variant="h5">
                                Amazon Fashion
                            </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="body2">
                                Women
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="body2">
                                Men
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="body2">
                                Kids
                            </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="body2">
                                Bags & Luggage
                            </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="body2">
                                Sportswear
                            </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Typography variant="body2">
                                Sales & Deals
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h5">
                                30 Day Returns
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* fashion header end */}

                    {/* container for images start */}
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item container xs={0} sm={9}>
                        {/* main banner image */}
                        <Grid item container xs={0} sm={12}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/EOSS/AFpage/unrecheaders/2._CB633427293_.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>

                        {/* offer and discount images */}
                        <Grid item container>
                        <Grid item container spacing={"2vw"}>
                        <Grid item container xs={6} sm={6}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Citi-scroll.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={6}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/XCMFlip/AF/V1/IDBI-scroll-1400x282.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={6}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/MFD/Cashback/Apay.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={6}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Jun/Stashfin-Bankstripe-scroll-1400x282.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>

                        <Grid item container xs={0} sm={12}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/FST-pc-Eng.jpg"
                                  alt="fashion"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={0} sm={1}></Grid>
                    </Grid>
                    {/* container for images end */}

                    {/* top rated women's clothing start */}
                    
                    <Grid item container spacing={"2vw"} sx={{ paddingTop: "1vw" }}>
                        <Grid item container xs={0} sm={3}></Grid>
                        <Grid item container xs={0} sm={8}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrecheader/1.jpg"
                                  alt="fashion"
                                />
                            </Card>
                        </Grid>
                        <Grid item container xs={0} sm={1}></Grid>
                        <Grid item container xs={0} sm={2}></Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_07.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_04.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_05.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_06.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_03.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_05.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>                        
                        <Grid item container xs={0} sm={1}></Grid>
                    </Grid>
                    {/* top rated women's clothing end */}

                    {/* top rated men's clothing start */}
                    <Grid item container spacing={"2vw"} sx={{ paddingTop: "1vw" }}>
                        <Grid item container xs={0} sm={3}></Grid>
                        <Grid item container xs={12} sm={8}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrecheader/2.jpg"
                                  alt="fashion"
                                />
                            </Card>
                        </Grid>
                        <Grid item container xs={0} sm={1}></Grid>
                        <Grid item container xs={0} sm={2}></Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_03.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_04.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_05.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_06.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_07.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={1.5}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_08.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>                        
                        <Grid item container xs={0} sm={1}></Grid>
                    </Grid>
                    {/* top rated men's clothing end */}

                    {/* top picks in beauty & grooming start */}
                    <Grid item container spacing={"2vw"} sx={{ paddingTop: "1vw" }}>
                        <Grid item container xs={0} sm={3}></Grid>
                        <Grid item container xs={12} sm={8}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5.jpg"
                                  alt="fashion"
                                />
                            </Card>
                        </Grid>
                        <Grid item container xs={0} sm={1}></Grid>

                        <Grid item container xs={0} sm={2}></Grid>
                        <Grid item container xs={0} sm={9} spacing={2}>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_03.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_04_REVISED.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_05_REVISED.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_06_REVISED.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_07.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        <Grid item container xs={6} sm={4}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                  component="img"
                                  image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Beauty/English/5-Beauty--Grooming_08.jpg"
                                  alt="fashion"
                                />     
                            </Card>
                        </Grid>
                        </Grid>
                        <Grid item container xs={0} sm={1}></Grid>
                    </Grid>
                    {/* top rated men's clothing end */}

                </Grid>
            </Box>
        </ThemeProvider>
        <Footer />
        </>
    )
}
