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
import { userEmail } from '../store/selectors/email';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const setuser = useSetRecoilState(userState);
    const email = useRecoilValue(userEmail);
    console.log("email navbar :" + email);
    if (email) {
        return (
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
              <Toolbar>   
            <Link to="/"  variant="h6" component="div" style={{ textDecoration: "none" , color :"white" ,flexGrow: 1 }}>
            <Typography >
            Udemy
                  </Typography>
                        </Link>     
           <Typography>
                      <h3>{ email}</h3>
                  </Typography>
                  <Button color="inherit" onClick={() => { 
                            localStorage.setItem("token", null);
                            setuser({
                                isLoading: false,
                                email:null
                            })
                      navigate("/");
                  }}>Logout</Button>              
          
        </Toolbar>
      </AppBar>
    </Box>  
        )
    }
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
