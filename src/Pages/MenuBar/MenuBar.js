import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export default function MenuBar() {

  // hook for left navbar
  const [state, setState] = useState({
        left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem> <b>Trending</b> </ListItem>
        <ListItem> Best Seller </ListItem>
        <ListItem> New Release </ListItem>
        <ListItem> Movers and Shakers </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem> <b>Digital Content And Devices</b> </ListItem>
        <ListItem> Echo & Alexa </ListItem>
        <ListItem> Fire TV </ListItem>
        <ListItem> Kindle E-readers & eBooks </ListItem>
        <ListItem> Audible Audio books </ListItem>
        <ListItem> Amazon Prime Video </ListItem>
        <ListItem> Amazon Prime Music </ListItem>
      </List>
      <List>
        <ListItem> <b>Shop By Department</b> </ListItem>
        <ListItem> Mobiles, Computers </ListItem>
        <ListItem> TV, Application, Electronics </ListItem>
        <ListItem> Men's Fashion </ListItem>
        <ListItem> Women's Fashion </ListItem>
      </List>
      <List>
        <ListItem> <b>Programs & Features</b> </ListItem>
        <ListItem> Gift Cards & Mobile Recharges </ListItem>
        <ListItem> Flight Tickets </ListItem>
        <ListItem> #FoundItOnAmazon </ListItem>
        <ListItem> Clearance Store </ListItem>
      </List>
      <List>
        <ListItem> <b>Help & Settings</b> </ListItem>
        <ListItem> Your Account </ListItem>
        <ListItem> Customer Service </ListItem>
        <ListItem> Sign In </ListItem>
      </List>
    </Box>
  );

  // hook for left navbar 
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const all = 
    <div style={{ color:"white" }}>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <FormatListBulletedOutlinedIcon onClick={toggleDrawer(anchor, true)} /> */}
            <Link 
              variant="body1"
              onClick={toggleDrawer(anchor, true)} 
              style={{ color: "white", textDecoration: "none" }}
            >
              All
            </Link>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#232f3e" }} >

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={ all } style={{ width: "110px", fontSize:"12px"}} />
          <Tab label="Today's Deals" style={{ width: "130px", fontSize:"12px"}} href="/todaysDeals" />
          <Tab label="Fashion" style={{ width: "70px", fontSize:"12px"}} href="/fashion" />
          <Tab label="Customer Services" style={{ width: "175px", fontSize:"12px"}} href="/customerService" />
          <Tab label="Amazon Pay" style={{ width: "115px", fontSize:"12px"}} href="/amazonPay" />
          <Tab label="Best Seller" style={{ width: "118px", fontSize:"12px"}} />
          <Tab label="Mobiles" style={{ width: "60px", fontSize:"12px"}} />
          <Tab label="Electronics" style={{ width: "90px", fontSize:"12px"}} />
          <Tab label="Prime" style={{ width: "60px", fontSize:"12px"}} />
          <Tab label="Home & Kitchen" style={{ width: "145px", fontSize:"12px"}} />
          <Tab label="New Release" style={{ width: "123px", fontSize:"12px"}} />
          <Tab label="Computers" style={{ width: "80px", fontSize:"12px"}} />
          <Tab label="Books" style={{ width: "60px", fontSize:"12px"}} />
          <Tab label="Coupons" style={{ width: "60px", fontSize:"12px"}} />
          <Tab label="Toys & Games" style={{ width: "127px", fontSize:"12px"}} />
          <Tab label="Sell" style={{ width: "50px", fontSize:"12px"}} />
        </Tabs>
      
      </AppBar>

    </Box>
  );
}
