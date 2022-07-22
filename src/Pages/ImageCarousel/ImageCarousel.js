import * as React from 'react';
import axios from 'axios';
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from 'react';
import './styles.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material";

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  fontSize: '0.7rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

// number of images you want to display and scroll according screen size
const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
];

export default function ImageCarousel() {

  // hooks for fetch data
  const [category, setCategory] = useState(null);
  // api for data fetching
  const url = "http://localhost:3001/api/category?limit=2"; // set limit 2

  // fetch data using axios
  useEffect(() => {
    axios.get(url).then((response) => {
      setCategory(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  // if data is not available return null
  if(!category) return null;

    return(
      <>
        <ThemeProvider theme={theme}>
          {
            category.data.items.map( categoryData => {
              return(
                <Box key={categoryData.id} sx={{ backgroundColor: "white", border: "1px solid black", color: "black", mt: 3, pb : 3}}>
                  <Typography variant="h3" sx={{ pl: 5}} >{categoryData.title}</Typography>
                  <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      key={categoryData}
                  >
                  {categoryData.image.split(',').map(imageSrc => { 
                    return(
                      <img src={imageSrc} className="carouselImg" alt="" key={imageSrc}/>
                    )
                    })
                  }
                  </Carousel>
                </Box>
              )
            })
          }
        </ThemeProvider>
      </>
    )
}
