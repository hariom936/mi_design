import React from 'react';
import {Typography, AppBar, Button, Toolbar} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const NavBar = () => {
  return (
   <AppBar position='fixed'>
    <Toolbar>
    <Typography variant="h5" flexGrow={1}> Cakes Shops </Typography>
    <Button  variant="text" color='inherit' startIcon={<LoginIcon />}>LogIn</Button>
    <Button  variant="text" color='inherit' endIcon={<ExitToAppIcon />}>LogOut</Button>
    </Toolbar>
    
   </AppBar>
  )
}

export default NavBar;
