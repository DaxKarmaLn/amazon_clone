import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material';
import axios from 'axios';

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '0.7rem',
  },
};

export default function SelectYourAddress() {
   
    // regular expression for email
    const pinCodeRegx = /[0-9]/;
    // hooks for dialog open-close
    const [open, setOpen] = useState(false);
    // hooks for data insertion
    const [pinCode, setPinCode] = useState('');
    const [areaName, setAreaName] = useState('');
    // hooks for validation
    const [formValidation, setFormValidation] = useState(null);

    // open dialog
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    // validate value
    const validation = () => {
      let error = false;
      if(pinCode === '') {
        error = {
          id: "pincode",
          message: "please enter pin-code number"
        }
        return error;
      }
      if((pinCode.length !== 6) || (!pinCode.match(pinCodeRegx))){
        error = {
          id: "pincode",
          message: "please enter valid pin-code"
        }
        return error;
      }
      return error;
    }

    // set value
    const data = () => {
      setFormValidation(null);

      let error = validation();
      if(error) {
        setFormValidation(error);
        return;
      }

      const url = `https://api.postalpincode.in/pincode/${pinCode}`;
      // data insertion using post method
      axios.get(url)
      .then((response) => {
        if(response.data[0].Message != 'No records found') {
          setAreaName(response.data[0].PostOffice[0].Name);
          localStorage.setItem("areaName", response.data[0].PostOffice[0].Name);
          localStorage.setItem("pincode", pinCode);
        }
        else {
          localStorage.removeItem("areaName");
          localStorage.removeItem("pincode");
        }
      })
      .catch((error) => {
          console.log(error);
      })
      handleClose();
    }
  
    return (
      <>
        <ThemeProvider theme={theme}>              
          <Box>
            <Button onClick={handleClickOpen}>
              <Typography variant="h3" sx={{ width: {xl: "150px", lg: "110px", md: "105px", sm: "72px", xs: "58px"} }}>
                {
                  localStorage.getItem("pincode") !== null ? 
                  <p style={{ color: "white" }}> Deliver To: <br></br>{localStorage.getItem("pincode")} {localStorage.getItem("areaName")} </p> : 
                  <p style={{ color: "white" }}>Hello <br></br> <b>Select Your Address</b></p>
                }
              </Typography>
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Choose your location</DialogTitle>
              <DialogContent>
                <TextField
                  id="pincode"
                  type="number"
                  label="Enter your pin-code"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  required
                  autoFocus
                  onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                  }}
                  onChange={(e) => setPinCode(e.target.value)}
                  helperText={formValidation && formValidation.id === "pincode" ? <p style={{color: "red"}}>{formValidation.message}</p> : null}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  sx={{backgroundColor: "#f7ca00", color: "#0f1111", marginRight: "1vw", "&:hover": { backgroundColor: "#ffd400" }}}
                  onClick={data}>
                    Apply
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
      
      </ThemeProvider>
      </>
    );
}
