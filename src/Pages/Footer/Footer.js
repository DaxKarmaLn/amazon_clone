import * as React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";import { createTheme, ThemeProvider } from "@mui/material";

// media query for font size
const theme = createTheme();
theme.typography.body2 = {
   fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};
theme.typography.caption = {
   fontSize: '0.3rem',
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.7rem',
  },
};

export default function Footer() {
    return(
        <> 
            <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', backgroundColor: "#232f3e", color: "white", textAlign: "left", mt: 5 }}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 2, sm: 3, md: 4 }} >
                    <Grid item xs={12} sx={{ textAlign: "center", backgroundColor: "#37475a", py: 2 }}>
                        <Link href="#" sx={{ textDecoration: "none", scrollBehavior: "smooth" }}>
                            <Typography variant="h6" sx={{ color: "white" }} >
                                Back To Top
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" ><b>Get to Know Us</b></Typography>
                        <Typography variant="body2" >About Us</Typography>
                        <Typography variant="body2" >Careers</Typography>
                        <Typography variant="body2" >Press Releases</Typography>
                        <Typography variant="body2" >Amazon Cares</Typography>
                        <Typography variant="body2" >Gift a Smile</Typography>
                        <Typography variant="body2" >Amazon Science</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="body2" ><b>Connect with Us</b></Typography>
                        <Typography variant="body2" >Facebook</Typography>
                        <Typography variant="body2" >Twitter</Typography>
                        <Typography variant="body2" >Instagram</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="body2" ><b>Make Money with Us</b></Typography>
                        <Typography variant="body2" >Sell on Amazon</Typography>
                        <Typography variant="body2" >Sell under Amazon Accelerator</Typography>
                        <Typography variant="body2" >Amazon Global Selling</Typography>
                        <Typography variant="body2" >Become an Affiliate</Typography>
                        <Typography variant="body2" >Fulfilment by Amazon</Typography>
                        <Typography variant="body2" >Advertise Your Products</Typography>
                        <Typography variant="body2" >Amazon Pay on Merchants</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="body2" ><b>Let Us Help You</b></Typography>
                        <Typography variant="body2" >COVID-19 and Amazon</Typography>
                        <Typography variant="body2" >Your Account</Typography>
                        <Typography variant="body2" >Returns Centre</Typography>
                        <Typography variant="body2" >100% Purchase Protection</Typography>
                        <Typography variant="body2" >Amazon App Download</Typography>
                        <Typography variant="body2" >Amazon Assistant Download</Typography>
                        <Typography variant="body2" >Help</Typography>
                    </Grid>

                    <Grid item xs={2}></Grid>

                    <hr style={{width: "100%"}}></hr>

                    <Grid item xs={5} sx={{ textAlign: "right" }}>
                        <Typography>AMAZON.in</Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} sx={{ textAlign: "left" }}>
                        <Typography>ENGLISH</Typography>
                    </Grid>

                    <Grid item xs={2} ></Grid>
                        <Grid item xs={8} sx={{ textAlign: "center" }} >
                            <Typography variant="body2" >
                                Australia
                                Brazil
                                Canada
                                China
                                France
                                Germany
                                Italy
                                Japan
                                Mexico
                                Netherlands
                                Poland
                                Singapore
                                Spain
                                Turkey
                                United Arab
                                Emirates <br></br>
                                United Kingdom
                                United States
                            </Typography>
                        </Grid>
                    <Grid item xs={2} ></Grid>

                    <hr style={{width: "100%" }}></hr>

                    <Grid item xs={1.5} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23", color: "#767676"}}>
                        <Typography variant="caption">
                            AbeBooks Books, art & collectibles <br></br><br></br>
                            Shopbop Designer Fashion Brands
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23", color: "#767676"}}>
                        <Typography variant="caption">
                            Amazon Web Services Scalable Cloud Computing Services <br></br><br></br> 
                            Amazon Business Everything For Your Business
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23", color: "#767676"}}>
                        <Typography variant="caption">
                            Audible Download Audio Books <br></br><br></br>
                            Prime Now 2-Hour Delivery on Everyday Items       
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23", color: "#767676"}}>
                        <Typography variant="caption">
                            DPReview Digital Photography <br></br><br></br>
                            Amazon Prime Music 90 million songs, ad-free Over 15 million podcast episodes
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23", color: "#767676"}}>
                        <Typography variant="caption">
                            IMDb Movies, TV & Celebrities
                        </Typography>
                    </Grid>
                    <Grid item xs={1.5} sx={{ backgroundColor: "#131a23"}}></Grid>

                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>
                    <Grid item xs={10} sx={{ backgroundColor: "#131a23", textAlign: "center", py: 2}}>
                        Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996–2022, Amazon.com, Inc. or its affiliates
                    </Grid>
                    <Grid item xs={1} sx={{ backgroundColor: "#131a23"}}></Grid>

                </Grid>
            </Box>
            </ThemeProvider>
        </>
    )
}
