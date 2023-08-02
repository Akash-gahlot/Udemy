// Signup.jsx
import React, { useState } from "react";
import { Grid, Button, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { userState } from "../store/atoms/user";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const user = useSetRecoilState(userState);
    async function login() { 
        try { 
            const response = await axios.post("http://localhost:3000/admin/login", {
            email:email,password:password
        })
            if (response.status == 200) { 
            localStorage.setItem("token", response.data.token);
            user({
                isLoading: false,
                email:email,
            })
            navigate("/allcourse");
        }
            else { 
            console.log("error");
                console.log(response.data);
                 user({
                isLoading: false,
                email:null,
            })
        }
        }
        catch (err) {
            console.log("some error while sending request");
             user({
                isLoading: false,
                email:null,
            })
        }
        
    }
  return (
   <div style={{ padding: "20px", marginTop: "50px" ,marginRight:"auto" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Login 
        </Typography>
        <Link to="/" style={{marginLeft:"200px" , textDecoration: "none" }}>
            <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }}>
              Back to Home
            </Button>
          </Link>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" onChange={(e)=>setemail(e.target.value)}/>
          <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" onChange={(e)=>setpassword(e.target.value)}/>
          <Button variant="contained" color="primary" onClick={login}>
            Login 
                  </Button>
                  <p>New User ?</p>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                     <Button variant="contained" color="primary">
            Sign Up
                      </Button>
                      </Link>                            
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
