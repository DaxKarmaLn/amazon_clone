
import * as React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

// import { useHistory } from "react-router-dom";

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};
theme.typography.h5 = {
  fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.0rem',
  },
};

export default function Cards() {
  // hooks for fetch data
  const [cardData, setCardData] = useState(null);
  // api for data fetching
  const url = "http://localhost:3001/api/cards?limit=1000";
  
  // fetch data using axios
  useEffect(() => {
    axios.get(url).then((response) => {
      setCardData(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  // if data is not available return null
  if(!cardData) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid align="center" alignItems="center" justify="center" sx={{ marginTop: {xl: "-20vw", lg: "-20vw", md: "-20vw", sm: "-20vw", xs: "-20vw"} }} >
          <Container maxWidth="xl">
            <Grid container item alignItems="center" justify="center" spacing={{xs: 1, sm: 2, md: 3}} sx={{ mb: 3 }} >    
              {
                cardData.data.items.map( cData => {
                  return(
                    <Grid key={cData.id} container item lg={3} md={4} sm={4} xs={4} >
                      <Card style={{ float: "left" }} sx={{ p: 2, my:2 }} >
                        <Typography variant="h3">{cData.title}</Typography>
                        
                        {/* working code start */}
                        {/* <CardMedia
                          component="img"
                          sx={{
                            height: {xl: "260px", lg: "210px", md: "190px", sm: "110px", xs: "70px"},
                            width: {xl: "320px", lg: "280px", md: "260px", sm: "180px", xs: "90px"},
                          }}
                          image={cData.image}
                          alt="cards"
                        /> */}
                        {/* working code end */}

                        <InnerImageZoom
                          width={320}
                          // height = {{xl: "260px", lg: "210px", md: "190px", sm: "110px", xs: "70px"}}
                          // width = {{xl: "320px", lg: "280px", md: "260px", sm: "180px", xs: "90px"}}
                          src = {cData.image}
                          zoomScale = {1.5}
                          hideHint={true}
                          zoomType="hover"
                        />
                        <Typography variant="body2" style={{ textAlign: "left" }} sx={{ py: 2}} >
                          <Link sx={{ cursor: "pointer" }} href={`/seeMore/${cData.id}` } >{cData.description}</Link>
                        </Typography>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Container>
        </Grid>
      </ThemeProvider>
    </>
  );
}