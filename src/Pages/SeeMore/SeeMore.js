import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
import './styles.css';

// media query for font size
const theme = createTheme();
theme.typography.body2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
};
theme.typography.caption = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  }
};

// customized label
const Label = styled(Paper)(({ theme }) => ({
    margin: '1vh 0vh',
    ...theme.typography.body2,
    padding: theme.spacing("0.5vh"),
    textAlign: 'center',
    color: '#111',
    borderRadius: 50,
}));

export default function SeeMore() {
    const params = useParams();

    // hooks for fetch data
    const [image, setImage] = useState(null);
    // api for data fetching, fetch data by id
    const url = `http://localhost:3001/api/category?q=${params.id}`;

    // fetch data using axios
    useEffect(() => {
      axios.get(url).then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }, []); 

    // if data is not available return null
    if(!image) return null;

  return (
    <>
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
                <MenuBar />
                <Box sx={{ pl: '1vw' }}>
                  {
                    image.data.items.map( imageData => {
                      return(
                        <>
                          <Typography variant="caption" sx={{ backgroundColor: "#fafafa", marginBottom: "1vh" }}>{imageData.title}</Typography>
                          <Masonry columns={3} spacing={2}>
                            {
                              imageData.image.split(',').map(imageSrc => { 
                                return(
                                  <Box sx={{ border: "1px solid #e7e7e7"}} className="popOver" >
                                    <img
                                      src={`${imageSrc}?w=162&auto=format`}
                                      alt="see more img"
                                      style={{
                                          borderBottomLeftRadius: 4,
                                          borderBottomRightRadius: 4,
                                          display: 'block',
                                          width: '100%',
                                          maxHeight: '50vh',
                                          maxWidth: '30vw',
                                          objectFit: 'fill'
                                          // objectFit: 'scale-down'
                                      }}
                                    />
                                    <Grid container spacing={2}>
                                      <Grid item xs={6}>
                                          <Label>See a similar products</Label>
                                      </Grid>
                                      <Grid item xs={6}>
                                          <Label>View Products</Label>
                                      </Grid>
                                    </Grid>
                                  </Box>
                                )
                              })
                            }
                          </Masonry>
                        </>
                      )
                    })
                  }
                </Box>
            </Box>
        </ThemeProvider>
    </>
  );
}
