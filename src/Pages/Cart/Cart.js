import React from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cart from './Assets/img/cart.jpg';
import r1 from './Assets/img/r1.jpg';
import r2 from './Assets/img/r2.jpg';
import r3 from './Assets/img/r3.jpg';
import r4 from './Assets/img/r4.jpg';
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";

// media query for font size
const theme = createTheme();
theme.typography.body2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
};
theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    }
};

export default function Cart() {
    return(
        <>
            <ThemeProvider theme={theme}>

                {/* header */}
                <Header />

                {/* menu bar */}
                <MenuBar />
                <Box>
                    <Box sx={{ backgroundColor: "#eaeded", padding: "2vw" }}>
                        <Grid container sx={{backgroundColor: "#ffffff", color: "#0f1111"}}>
                            {/* left side box */}
                            <Grid item xs={7} sm={8}>
                                <Grid item>
                                    <Box sx={{ float: "left" }} >
                                        <img 
                                            src={cart}
                                            alt="cart"
                                            style={{ maxHeight: "15vw", maxWidth: "20vw", margin: "1vw" }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid>
                                    <Box sx={{ margin: "1vw", marginLeft: "22vw" }}>
                                        <Typography variant="h5">Your Amazon Cart is empty</Typography>
                                        <Typography sx={{ paddingBottom: "1vw"}} variant="body2">
                                            <Link>Shop today's deals</Link>
                                        </Typography>
                                        <Button sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", "&:hover": { backgroundColor: "#ffd400" }}} href="/login" >
                                            <Typography variant="body2">Sign in to your account</Typography>
                                        </Button>
                                        <Button sx={{backgroundColor: "#ffffff", color: "#0f1111", border: "1px solid #d5d9d9" }} href="/registration" >
                                            <Typography variant="body2">Sign up now</Typography>
                                        </Button>                            
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* break two grid */}
                            <Grid item xs={0.5} sx={{ backgroundColor: "#eaeded" }}></Grid>

                            {/* right side box */}
                            <Grid item xs={4.5} sm={3.5} sx={{ backgroundColor: "#ffffff", color: "#0f1111", padding: "1vw"}}>
                                <Grid>
                                    <Typography variant="h5">
                                        Customers who bought items in your Recent History also bought
                                    </Typography>
                                    <Box>
                                        
                                        <Box sx={{ float: "left" }}>
                                            <Box sx={{ float: "left"}}>
                                                <img 
                                                    src={r1}
                                                    alt="cart"
                                                    style={{ maxHeight: "25vw", maxWidth: "25vw" }}
                                                />
                                            </Box>
                                            <Box sx={{ float: "left", marginLeft: "2vw"}}>
                                                <Typography variant="body2">
                                                    <Link>PROTECTORR...</Link>
                                                </Typography>
                                                <Typography variant="body2"> $145.00</Typography>
                                                <Button sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", padding: "0.5vh", minWidth: "0px", "&:hover": { backgroundColor: "#ffd400" } }}>
                                                    <Typography variant="body2">Add to Cart</Typography>
                                                </Button>
                                            </Box>                                            
                                        </Box>

                                        <Box sx={{ paddingTop: "1vw", float: "left" }}>
                                            <Box sx={{ float: "left"}}>
                                                <img 
                                                    src={r2}
                                                    alt="cart"
                                                    style={{ maxHeight: "25vw", maxWidth: "25vw" }}
                                                />
                                            </Box>
                                            <Box sx={{ float: "left", marginLeft: "2vw"}}>
                                                <Typography variant="body2">
                                                    <Link>Wisely [Pack 2] Boat…</Link>
                                                </Typography>
                                                <Typography variant="body2"> $145.00</Typography>
                                                <Button sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", padding: "0.5vh", minWidth: "0px", "&:hover": { backgroundColor: "#ffd400" } }}>
                                                    <Typography variant="body2">Add to Cart</Typography>
                                                </Button>
                                            </Box>
                                        </Box>

                                        <Box sx={{ paddingTop: "1vw", float: "left" }}>
                                            <Box sx={{ float: "left"}}>
                                                <img 
                                                    src={r3}
                                                    alt="cart"
                                                    style={{ maxHeight: "25vw", maxWidth: "25vw" }}
                                                />
                                            </Box>
                                            <Box sx={{ float: "left", marginLeft: "2vw"}}>
                                                <Typography variant="body2">
                                                    <Link>DVTECH� (Pack of…</Link>
                                                </Typography>
                                                <Typography variant="body2"> $145.00</Typography>
                                                <Button sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", padding: "0.5vh", minWidth: "0px", "&:hover": { backgroundColor: "#ffd400" } }}>
                                                    <Typography variant="body2">Add to Cart</Typography>
                                                </Button>
                                            </Box>
                                        </Box>

                                        <Box sx={{ paddingTop: "1vw", float: "left" }}>
                                            <Box sx={{ float: "left"}}>
                                                <img 
                                                    src={r4}
                                                    alt="cart"
                                                    style={{ maxHeight: "22vw", maxWidth: "22vw" }}
                                                />
                                            </Box>
                                            <Box sx={{ float: "left", marginLeft: "2vw"}}>
                                                <Typography variant="body2">
                                                    <Link>FCS (Pack of 5) Edge…</Link>
                                                </Typography>
                                                <Typography variant="body2"> $145.00</Typography>
                                                <Button sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", padding: "0.5vh", minWidth: "0px", "&:hover": { backgroundColor: "#ffd400" } }}>
                                                    <Typography variant="body2">Add to Cart</Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* image carousel */}
                <ImageCarousel />

                {/* sign in */}
                <SignIn />

                {/* footer */}
                <Footer />
            </ThemeProvider>
        </>
    )
}