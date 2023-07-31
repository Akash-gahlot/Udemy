import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
              <Toolbar>   
            <Link to="/"  variant="h6" component="div" style={{ textDecoration: "none" , color :"white" ,flexGrow: 1 }}>
            <Typography >
            Udemy
                  </Typography>
          </Link>      
          
                  <Button color="inherit" onClick={()=>navigate("/signup")}>SignUp</Button>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
