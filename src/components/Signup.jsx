// Signup.jsx
import React from "react";
import { Grid, Button, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
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
          <TextField label="Username" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
          <Button variant="contained" color="primary">
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
