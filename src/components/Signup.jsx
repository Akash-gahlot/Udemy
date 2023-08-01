// Signup.jsx
import React from "react";
import { Grid, Button, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

const Signup = () => {
    const navigate = useNavigate();
    const [username, setusername] = React.useState("");
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const setUser = useSetRecoilState(userState);
    async function signup() {        
       const response= await axios.post("http://localhost:3000/admin/signup", {
           username: username,
           email: email,
           password: password 
       })
        console.log(response.data)
        if (response.status = 200) {
            console.log("all ok");
            const token = response.data.split(' ')[1];
            localStorage.setItem("token", token);
            setUser({
                isLoading: false,
                email:email,
            })
            navigate("/allcourse");
        }
        else { 
            console.log("error");
            console.log(response.data);
        }
    }
  return (
   <div style={{ padding: "20px", marginTop: "50px" ,marginRight:"auto" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Link to="/" style={{marginLeft:"200px" , textDecoration: "none" }}>
            <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }}>
              Back to Home
            </Button>
          </Link>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
                  <TextField label="username" variant="outlined" fullWidth margin="normal" value={ username} onChange={(e)=>setusername(e.target.value)}/>
          <TextField label="email" variant="outlined" fullWidth margin="normal" onChange={(e)=>setemail(e.target.value)}/>
          <TextField label="password" variant="outlined" fullWidth margin="normal" type="password" onChange={(e)=>setpassword(e.target.value)} />
          <Button variant="contained" color="primary" onClick={signup}>
            Sign Up
                  </Button>
                  <p>Already a User ?</p>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                     <Button variant="contained" color="primary">
            Login
                      </Button>
                      </Link>                            
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
