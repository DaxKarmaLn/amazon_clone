import React, { useState } from 'react';
import { Box, Button, Grid, Popover, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import GradeIcon from '@mui/icons-material/Grade';
import PaidIcon from '@mui/icons-material/Paid';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MemoryIcon from '@mui/icons-material/Memory';
import Link  from '@mui/material/Link';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

// media queries for font size
const theme = createTheme();
theme.typography.body1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};
theme.typography.body2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
};
theme.typography.h4 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};
theme.typography.h6 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

export default function CustomerService() {
    // hooks and function for hover start
    // const [anchor, setAnchor] = useState(null);
    // const [hover, setHover] = useState(false);
    // const handleMouseOver = (e) => {
    //     setAnchor(e.currentTarget); 
    //     setHover(true);
    // };
    // const handleMouseOut = () => {
    //     setHover(false);
    // };
    //  hooks and function for hover end
    
  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <MenuBar />
        <Box>
            <Grid item container xs={12}>
                <Grid item container>
                    {/* first row */}
                    <Grid item xl={3} lg={2} md={0}></Grid>
                    <Grid item container xl={6} lg={8} md={12}>
                        <Box
                            sx={{ 
                                border: "0.1vw solid #f9af38",
                                borderRadius: "10px",
                                paddingLeft: "0.5vw", 
                                marginY: "2vw",
                                backgroundColor: "#f9af38"
                            }}
                        >
                            <Box 
                                sx={{ 
                                    backgroundColor: "#ffffff", 
                                    padding: "0.7vw",
                                    borderTopRightRadius: "7px",
                                    borderBottomRightRadius: "7px"
                                }}
                            >
                                <PermScanWifiIcon sx={{ color: "#f9af38", float: "left", marginRight: "0.5vw" }} />
                                <Typography variant="body1">
                                    Enjoy the shopping experience in your language of preference by switching to your desired language (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Bengali). 
                                    To know more, visit this page.
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant="h4">
                            Hello, What can we help you with?
                        </Typography>                    
                    </Grid>
                    <Grid item xl={3} lg={2} md={0}></Grid>
                </Grid>

                {/* horizontal row */}
                <hr style={{width: "100%", margin: "2vw 0vw"}}></hr>
                
                {/* second row */}
                <Grid container justify="space-around" spacing={4}>
                    <Grid item xl={3} lg={2} md={0}></Grid>
                    <Grid item container xl={6} lg={8} md={12}>
                        <Grid item container xs={12}>
                            <Typography variant="h4">
                                Some things you can do here
                            </Typography>
                        </Grid>

                        <Grid container justify="space-around" spacing={2}>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <AddBoxIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Your Orders</Typography>
                                    <Typography variant="body2">Track Package</Typography>
                                    <Typography variant="body2">Edit or cancel orders</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <KeyboardReturnIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Return and Refunds</Typography>
                                    <Typography variant="body2">Return or exchange items</Typography>
                                    <Typography variant="body2">Print return mailing tables</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <MyLocationIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Manage Address</Typography>
                                    <Typography variant="body2">Update your address</Typography>
                                    <Typography variant="body2">Add address, landmark details</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <GradeIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Manage Prime</Typography>
                                    <Typography variant="body2">View your benefits</Typography>
                                    <Typography variant="body2">Membership details</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <PaidIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Payment Settings</Typography>
                                    <Typography variant="body2">Add or edit payment methods</Typography>
                                    <Typography variant="body2">Change expired debit or credit card</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <ManageAccountsIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Account Settings</Typography>
                                    <Typography variant="body2">Change your email or password</Typography>
                                    <Typography variant="body2">Update login information</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <CoronavirusIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Amazon And COVID-19</Typography>
                                    <Typography variant="body2">Impact on orders</Typography>
                                    <Typography variant="body2">Impact on deliveries</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderRadius: "0.5vh", padding: "10px"}}>
                                    <MemoryIcon sx={{ float: "left", color: "#f9af38", fontSize: {xs: "10vw", sm: "6vw", md: "6vw", lg: "4vw", xl: "3vw"} }}/>
                                    <Typography variant="h6">Digital Services & Support</Typography>
                                    <Typography variant="body2">Find device help and support</Typography>
                                    <Typography variant="body2">Troubleshoot device issues</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <hr style={{width: "100%", marginTop: "1.5vw", marginBottom: "2.5vw"}}></hr>
                        <Typography variant="h6">
                            Find more solutions <i>Type something like, "question about a charge"</i>
                        </Typography>
                        <TextField
                            label=""
                            type="search"
                            fullWidth
                        />

                    </Grid>
                    <Grid item xl={3} lg={2} md={0}></Grid>
                </Grid>
                
                {/* horizontal row */}
                <hr style={{width: "100%", marginTop: "3vw"}}></hr>

                {/* Third row */}
                <Grid container justify="space-around" spacing={4}>
                    <Grid item xl={3} lg={2} md={0}></Grid>
                    <Grid item container xl={6} lg={8} md={12}>
                        <Grid item container xs={12}>
                            <Typography variant="h4">
                                Browse Help Topics
                            </Typography>
                        </Grid>

                        {/* left side container */}
                        <Grid container>
                            <Grid item xs={4}>
                                <Box sx={{ backgroundColor: "#f3f3f3", border: "0.1vh solid #d5d9d9", borderTopLeftRadius: "0.5vh", borderBottomLeftRadius: "0.5vh", padding: "10px"}}>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} 
                                        // onMouseOver={handleMouseOver}
                                        // onMouseOut={handleMouseOut}
                                    >
                                        Recommended Topics
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Shipping & Delivery
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Amazon Prime
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Payment & Pricing
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Amazon Pay balance
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Returns, Refunds
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Ordering
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Managing Your Account
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Devices & Digital Services
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        More Help
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Amazon Business
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Other Topics & Help Sites
                                    </Typography>
                                    <Typography variant="body1" sx={{ cursor: "default", "&:hover": { color: "#e47911" } }} >
                                        Customer Service
                                    </Typography>                                  
                                </Box>
                            </Grid>

                            {/* right side container */}
                            <Grid item xs={8}>
                                <Box sx={{ border: "0.1vh solid #d5d9d9", borderTopRightRadius: "0.5vh", borderBottomRightRadius: "0.5vh", padding: "7.5px"}}>
                                    <Typography variant="h6">Learn how to...</Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Change Your Language Preference
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Where's My Order?
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Paying for Your Order
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Delivery Charges
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Returns & Refunds
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Manage Your Account Information
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Pay on Delivery
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Revise Payment
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            UPI
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Net Banking
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Payment Issues and Restrictions
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                            Revise Payment
                                        </Link>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xl={3} lg={2} md={0}></Grid>
                </Grid>
                

                {/* code for hover start */}
                {/* <Grid container item xs={12}> */}
                {/* <Typography 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Hover Me
                </Typography> */}
                {/* <Popover
                    open={Boolean(anchor)}
                    anchorReference="anchorPosition"
                    // anchorPosition={{ top: 535, left: 515 }}
                    anchorPosition={{ top: 634, left: 796 }}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    onClose={(e) => setAnchor(null)}
                >
                    <Box sx={{ border: "0.1vh solid #d5d9d9", borderTopRightRadius: "0.5vh", borderBottomRightRadius: "0.5vh", padding: "10px"}}>
                        <Typography variant="h6">Learn how to...</Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Change Your Language Preference
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Where's My Order?
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Paying for Your Order
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Delivery Charges
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Returns & Refunds
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Manage Your Account Information
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Pay on Delivery
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link style={{ textDecoration: "none", color: "#004baa" }}>
                                Revise Payment
                            </Link>
                        </Typography>
                    </Box>
                </Popover> */}
                {/* </Grid> */}
                {/* code for hover end */}
                

            </Grid>
        </Box>
        <Footer />
    </ThemeProvider>
    </>
  )
}
