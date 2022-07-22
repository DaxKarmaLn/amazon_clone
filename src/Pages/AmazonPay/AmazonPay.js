import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

import PaidIcon from '@mui/icons-material/Paid';
import GradeIcon from '@mui/icons-material/Grade';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import TodayIcon from '@mui/icons-material/Today';
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TungstenIcon from '@mui/icons-material/Tungsten';
import TvIcon from '@mui/icons-material/Tv';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import TrainIcon from '@mui/icons-material/Train';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CarRentalIcon from '@mui/icons-material/CarRental';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

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
theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1rem',
        marginBottom: '1vh',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
        marginBottom: '1vh',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};
theme.typography.inherit = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};

export default function AmazonPay() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <MenuBar />
        <Typography variant="h3">
            Amazon Pay
        </Typography>
        
        <Box sx={{ backgroundColor: "#e7e7e7", paddingTop: "1vw"}}>
            <Grid>
                <Grid container>

                <Grid item xs={0.5}></Grid>
                <Grid item xs={1.5} sx={{ backgroundColor: "#f6f6f6", marginTop: "1vh", marginRight: "1vh" }}>
                    <Typography variant="inherit">
                        Amazon pay balance
                    </Typography>
                    <hr></hr>
                    <Typography variant="inherit">
                        <Link> Add Money </Link>
                    </Typography>
                    <Typography variant="inherit">
                        <Link> Add Gift Card </Link>
                    </Typography>
                    <Typography variant="inherit">
                        <Link> Auto Reload </Link>
                    </Typography>
                    <Typography variant="inherit">
                        <Link> Account Settings </Link>
                    </Typography>             
                </Grid>

                    {/* <Grid item xs={2}></Grid> */}
                    <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                        <Grid item xs={1.70}>
                            <PaidIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Your Transaction</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <GradeIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Rewards</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <BloodtypeIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Donate</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <TodayIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Check EMI Options</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <AddCardIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Your Saved Card</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <AccountBalanceIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Your Bank Account</Typography>
                        </Grid>
                        <Grid item xs={1.70}>
                            <QuestionMarkIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                            <Typography variant="body2">Help and FAQs</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid sx={{ marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", padding: "1vw"}}>
                            <Grid item xs={1.70}>
                                <PhoneAndroidIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Mobile Recharge</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <TungstenIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Electricity</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <TvIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">DTH Recharge</Typography>
                            </Grid>                            
                            <Grid item xs={1.70}>
                                <MobileFriendlyIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Mobile Postpaid</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <CreditCardIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Credit Card Bill</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <FindReplaceIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Loan Repayment</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <PropaneTankIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Gas Cylinder</Typography>
                            </Grid>

                            {/* copy of above code for second row start */}
                            <Grid item xs={1.70}>
                                <CreditCardIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Credit Card Bill</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <PropaneTankIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Gas Cylinder</Typography>
                            </Grid>             
                            <Grid item xs={1.70}>
                                <MobileFriendlyIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Mobile Postpaid</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <PhoneAndroidIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Mobile Recharge</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <FindReplaceIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Loan Repayment</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <TvIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">DTH Recharge</Typography>
                            </Grid> 
                            <Grid item xs={1.70}>
                                <TungstenIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Electricity</Typography>
                            </Grid>
                            {/* copy of above code for second row end */}
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8}  sx={{textAlign: "center", backgroundColor: "#ffffff", padding: "1vw"}}>
                            <Grid item xs={1.70}>
                                <TrainIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Trains</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <AirplanemodeActiveIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Flights</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <DirectionsBusIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Bus Tickets</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <CarRentalIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Car Insurance</Typography>
                            </Grid>
                            <Grid item xs={1.70}>
                                <TwoWheelerIcon style={{ fontSize: "3vw", color: "#edbc61" }} />
                                <Typography variant="body2">Bike Insurance</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                {/* 1st image: pay anyone, anywhere */}
                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                            <Grid item xs={12}>
                                <img 
                                    src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Surbhi/2021/Sep/APDPC/PC_Dashboar_770x150_P2P_2._CB642078759_.jpg"
                                    alt="payment img"
                                    width="100%"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                {/* 2nd image: pay bills or recharge */}
                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                            <Grid item xs={12}>
                                <img 
                                    src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Surbhi/2021/Sep/APDPC/PC_Dashboar_770x150_Bills_2._CB642078759_.jpg"
                                    alt="payment img"
                                    width={"100%"}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                {/* 3rd image: Order food, medicine & more */}
                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                            <Grid item xs={12}>
                                <img 
                                    src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Kartik/R2UC/Shopping/LPA/Revised/PC_Dashboard_770x150_LPA._CB647720738_.jpg"
                                    alt="payment img"
                                    width={"100%"}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                {/* 4th image: Donate now, Help fight COVID-19 */}
                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                            <Grid item xs={12}>
                                <img 
                                    src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Jun_GTM/PC_Dashboar_770x150_8._CB667412567_.jpg"
                                    alt="payment img"
                                    width={"100%"}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>

                {/* 5th image: Get up to ₹2,000 off* */}
                <Grid sx={{marginTop: "3vw"}} >
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid container item xs={8} sx={{textAlign: "center", backgroundColor: "#ffffff", marginTop: "1vw"}}>
                            <Grid item xs={12}>
                                <img 
                                    src="https://m.media-amazon.com/images/G/31/img16/malar/April22/Flight_Remaining_PC_Dashboar_770x150._CB624186050_.jpg"
                                    alt="payment img"
                                    width={"100%"}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </ThemeProvider>
    </>
  )
}
